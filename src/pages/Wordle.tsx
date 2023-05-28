import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { GuessArea } from "../components/WordleClone/GuessArea";
import { KeyboardArea } from "../components/WordleClone/KeyboardArea";
import { useWordle } from "../hooks/useWordle";
import { container } from "../utils/motion";
import { DUMMY_ANSWERS } from "../constants/wordle-answer";

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
    <section className="relative w-full h-screen mx-auto">
      <div className="pt-[120px] flex flex-col justify-center items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="bg-tertiary p-8 rounded-2xl w-[480px] flex flex-col"
        >
          <h1 className="text-[36px] font-bold select-none text-center">
            Wordle Clone
          </h1>
          <GuessArea
            currentGuess={currentGuess}
            history={guessHistory}
            turn={turn}
            isCorrect={isCorrect}
            tryAgain={tryAgain}
          />
          <KeyboardArea onClick={handleClick} onKeyUp={handleKeyup} />
        </motion.div>
      </div>
    </section>
  );
};
