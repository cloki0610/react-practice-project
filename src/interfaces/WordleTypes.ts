import React from "react";

export enum status {
  TRUE = "true",
  GOOD = "good",
  BAD = "bad",
}

export type historyType = {
  char: string;
  status: status;
};

export type cellType = {
  char: string;
  status: status | null;
};

export type CellProps = {
  char: string;
  status: status | null;
};

export type GuessAreaProps = {
  currentGuess: string[];
  history: historyType[][];
  turn: number;
  isCorrect: boolean;
  tryAgain: () => void;
};

export type GuessRowProps = { row: cellType[] };

export type KeyboardAreaProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>, action: string) => void;
};

export type KeyboardButtonProps = {
  action: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>, action: string) => void;
};
