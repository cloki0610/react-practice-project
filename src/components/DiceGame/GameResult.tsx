import type { GameResultProps } from "../../interfaces/DashType";

export const GameResult = ({ diceRes, answer }: GameResultProps) => {
  let gameRes: string = "";

  if (diceRes > 3) {
    answer === "small" ? (gameRes = "LOSE") : (gameRes = "WIN");
  } else {
    answer === "small" ? (gameRes = "WIN") : (gameRes = "LOSE");
  }

  return (
    <div className="mt-11 flex flex-col justify-center items-center">
      <p className="text-center text-[24px]">
        Your guess:{" "}
        <span
          className={`${
            answer === "small" ? "text-red-600" : "text-green-600"
          }`}
        >
          {answer === "small" ? "Small" : "Big"}
        </span>
      </p>
      <p className="text-center text-[24px] mb-5">
        You rolled:{" "}
        <span className={`${diceRes > 3 ? "text-green-600" : "text-red-600"}`}>
          {diceRes}
        </span>
      </p>
      <p className="text-center text-[24px]">You {gameRes}.</p>
    </div>
  );
};
