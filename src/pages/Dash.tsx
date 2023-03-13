import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { Dice } from "../components/DiceGame/Dice";
import { GameResult } from "../components/DiceGame/GameResult";
import { container } from "../utils/motion";

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
      <div className="pt-[120px] flex flex-col justify-center items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="bg-tertiary p-5 rounded-2xl w-[360px] pb-[30px]"
        >
          <h1 className="text-[36px] font-bold mb-11 text-center select-none">
            Dice Game
          </h1>
          {!gameStart && <Dice diceNum={diceNum} />}
          {!gameStart && answer && (
            <GameResult diceRes={diceNum} answer={answer} />
          )}
          {gameStart && (
            <div className="text-center select-none">
              <p className="text-[28px]">Big or Small?</p>
              <p className="text-[16px] mb-20">
                (Expect 1-3 is Big, 4-6 is Small)
              </p>
            </div>
          )}
          <div className="flex flex-col justify-center items-center">
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
                className="bg-white text-black text-[28px] rounded-md w-[240px] h-[60px] hover:bg-secondary hover:text-black my-5"
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
        </motion.div>
      </div>
    </section>
  );
};
