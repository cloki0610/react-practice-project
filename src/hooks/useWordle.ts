import React, { KeyboardEvent, useEffect, useState } from "react";
import { actions } from "../utils/keyboard-actions";
import { historyType, status } from "../interfaces/WordleTypes";

export const useWordle = () => {
  const [solution, setSolution] = useState<string>("");
  const [turn, setTurn] = useState<number>(0);
  const [currentGuess, setGuess] = useState<string[]>([]);
  const [guessHistory, setGuessHistory] = useState<historyType[][]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const formatGuess = (currentGuess: string[]) => {
    return currentGuess.join("").toLowerCase();
  };

  const addNewGuess = () => {
    if (currentGuess.length !== 5) return;
    let newHistory: historyType[] = [];
    // Compare result
    if (formatGuess(currentGuess) === solution) {
      // If correct set isCorrect to true
      for (let i in currentGuess) {
        newHistory.push({ char: currentGuess[i], status: status.TRUE });
      }
      setIsCorrect(true);
    } else {
      // If incorrect check each char
      for (let i in currentGuess) {
        if (currentGuess[i].toLowerCase() === solution[i]) {
          newHistory.push({ char: currentGuess[i], status: status.TRUE });
        } else if (solution.split("").includes(currentGuess[i].toLowerCase())) {
          newHistory.push({ char: currentGuess[i], status: status.GOOD });
        } else {
          newHistory.push({ char: currentGuess[i], status: status.BAD });
        }
      }
    }
    // Then add current guess to guess histor
    setGuess([]);
    setGuessHistory((prevHist) => [...prevHist, newHistory]);
    setTurn((prevTurn) => prevTurn + 1);
  };

  const handleKeyup = (e: KeyboardEvent) => {};

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    action: string
  ) => {
    if (actions.includes(action)) {
      if (action === "Enter") {
        if (currentGuess.length === 5) {
          addNewGuess();
        }
        return;
      }
      if (action === "Backspace") {
        setGuess((prevGuess) => {
          let newGuess = [...prevGuess];
          newGuess.pop();
          return newGuess;
        });
        return;
      }
      if (currentGuess.length < 5) {
        setGuess((prevGuess) => [...prevGuess, action.toUpperCase()]);
      }
    }
  };

  const reset = () => {
    setTurn(0);
    setGuess([]);
    setGuessHistory([]);
    setIsCorrect(false);
  };

  useEffect(() => {
    reset();
  }, []);

  return {
    solution,
    currentGuess,
    guessHistory,
    turn,
    isCorrect,
    setSolution,
    handleKeyup,
    handleClick,
    reset,
  };
};

export default useWordle;
