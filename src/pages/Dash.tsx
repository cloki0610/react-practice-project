import { useState, useEffect } from "react";
import { Dice } from "../components/DiceGame/Dice";
import { GameResult } from "../components/DiceGame/GameResult";

export const Dash = () => {
  const [diceNum, setDiceNum] = useState<number>(1);
  const [gameStart, setStart] = useState<boolean>(false);
  const [answer, setAns] = useState<string | null>(null);
  function generateDiceNumber() {
    let randomize = Math.ceil(Math.random() * 6);
    return randomize;
  }
  useEffect(() => {
    if (answer) {
      setStart(false);
    }
  }, [answer]);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="pt-[160px] flex flex-col justify-center items-center">
        <div className="pb-[80px]">
          {!gameStart && <Dice diceNum={diceNum} />}
          {!gameStart && answer && (
            <GameResult diceRes={diceNum} answer={answer} />
          )}
        </div>
        {gameStart && (
          <p className="sm:text-[28px] text-[16px] mb-20">
            Big or Small? (Expect 1-3 is Big, 4-6 is Small)
          </p>
        )}
        {gameStart && (
          <>
            <button
              className="bg-green-600 text-white text-[28px] rounded-md w-[180px] h-[60px] hover:bg-secondary hover:text-black"
              onClick={() => setAns("big")}
            >
              BIG
            </button>
            <br />
            <button
              className="bg-red-600 text-white text-[28px] rounded-md w-[180px] h-[60px] hover:bg-secondary hover:text-black"
              onClick={() => setAns("small")}
            >
              SMALL
            </button>
          </>
        )}
        {!gameStart && (
          <button
            className="bg-white text-black text-[28px] rounded-md w-[240px] h-[60px] hover:bg-secondary hover:text-black"
            onClick={() => {
              let gameRes = generateDiceNumber();
              setAns(null);
              setDiceNum(gameRes);
              setStart(true);
            }}
          >
            GAME START
          </button>
        )}
      </div>
    </section>
  );
};
