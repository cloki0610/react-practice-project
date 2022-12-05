import { useState, useEffect } from "react";
import { Dice } from "../components/DiceGame/Dice";
import { GameResult } from "../components/DiceGame/GameResult";
import classes from "./Dash.module.css";

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
    <div className={classes.dash}>
      {!gameStart && <Dice diceNum={diceNum} />}
      <br />
      {!gameStart && answer && <GameResult diceRes={diceNum} answer={answer} />}
      {gameStart && <p>Big or Small? (Expect 1-3 is Big, 4-6 is Small)</p>}
      {gameStart && (
        <>
          <button onClick={() => setAns("big")}>Big</button>
          <br />
          <button onClick={() => setAns("small")}>Small</button>
        </>
      )}
      {!gameStart && (
        <button
          onClick={() => {
            let gameRes = generateDiceNumber();
            setAns(null);
            setDiceNum(gameRes);
            setStart(true);
          }}
        >
          Game Start
        </button>
      )}
    </div>
  );
};
