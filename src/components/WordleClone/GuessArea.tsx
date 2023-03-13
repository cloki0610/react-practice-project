import { GuessRow } from "./GuessRow";
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
    <div className="flex flex-col justify-center items-center">
      {turn >= 6 && (
        <div className="flex flex-col justify-center items-center text-[48px] font-bold select-none">
          <p>GAME OVER</p>
          <p className="text-red-500">YOU LOSE.</p>
        </div>
      )}
      {isCorrect && (
        <div className="flex flex-col justify-center items-center text-[48px] font-bold select-none">
          <p>Correct</p>
          <p className="text-green-500">YOU WIN</p>
        </div>
      )}
      {(turn >= 6 || isCorrect) && (
        <button
          className="bg-[#3a3a3a] mb-5 p-[14px] rounded-md font-medium hover:opacity-80 cursor-pointer"
          onClick={tryAgain}
        >
          Try Again
        </button>
      )}
      <table className="w-full max-w-[240px] border-separate border-spacing-1">
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
