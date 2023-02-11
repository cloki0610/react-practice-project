import { GuessRow } from "./GuessRow";
import classes from "./GuessArea.module.css";
import type { cellType, GuessAreaProps } from "../../interfaces/WordleTypes";

export const GuessArea = ({
  currentGuess,
  history,
  turn,
  isCorrect,
  tryAgain,
}: GuessAreaProps) => {
  let newGuess: cellType[] = currentGuess.map((c) => {
    return { char: c, status: null };
  });
  if (newGuess.length < 5) {
    let emptyCells = 5 - newGuess.length;
    for (let i = 0; i < emptyCells; i++)
      newGuess.push({ char: "", status: null });
  }
  let guessRows = [...history, newGuess];
  if (guessRows.length < 6) {
    let emptyRows = 6 - guessRows.length;
    let empRow = [];
    for (let j = 0; j < 5; j++) {
      empRow.push({ char: "", status: null });
    }
    for (let i = 0; i < emptyRows; i++) {
      guessRows.push(empRow);
    }
  }
  return (
    <div className={classes.guessarea}>
      {turn >= 6 && <p className={classes.result}>Game Over! You Lose.</p>}
      {isCorrect && <p className={classes.result}>Correct! You Win!</p>}
      {(turn >= 6 || isCorrect) && (
        <button className={classes.retry} onClick={tryAgain}>
          Try Again
        </button>
      )}
      <table>
        <tbody>
          {!isCorrect &&
            turn < 6 &&
            guessRows.map((row, i) => (
              <GuessRow key={`guess-${i}`} row={row} />
            ))}
        </tbody>
      </table>
    </div>
  );
};
