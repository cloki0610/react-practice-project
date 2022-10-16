import { useEffect, useState } from "react";
import { GuessArea } from "../components/WordleClone/GuessArea";
import { KeyboardArea } from "../components/WordleClone/KeyboardArea";
import { useWordle } from "../hooks/useWordle";
import { DUMMY_ANSWERS } from "../utils/WordleAns";
import classes from "./Wordle.module.css";

export const Wordle = () => {
  const {
    currentGuess,
    guessHistory,
    turn,
    isCorrect,
    setSolution,
    handleKeyup,
    handleClick,
    reset,
  } = useWordle();
  useEffect(() => {
    let ans = DUMMY_ANSWERS;
    const randIdx = Math.floor(Math.random() * ans.length);
    setSolution(ans[randIdx].word);
  }, []);

  const tryAgain = () => {
    let ans = DUMMY_ANSWERS;
    const randIdx = Math.floor(Math.random() * ans.length);
    reset();
    setSolution(ans[randIdx].word);
  };

  return (
    <div>
      <div>
        <h2 className={classes.center}>Wordle Clone</h2>
      </div>
      <div className={classes.center}>
        <GuessArea
          currentGuess={currentGuess}
          history={guessHistory}
          turn={turn}
          isCorrect={isCorrect}
          tryAgain={tryAgain}
        />
      </div>
      <div>
        <KeyboardArea onClick={handleClick} />
      </div>
    </div>
  );
};
