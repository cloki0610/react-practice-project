export const GameResult = ({
  diceRes,
  answer,
}: {
  diceRes: number;
  answer: string | null;
}) => {
  let gameRes: string = "";

  if (diceRes > 3) {
    answer === "small" ? (gameRes = "LOSE") : (gameRes = "WIN");
  } else {
    answer === "small" ? (gameRes = "WIN") : (gameRes = "LOSE");
  }

  return (
    <>
      <p style={{ textAlign: "center" }}>
        You guess it is {answer === "small" ? "Small" : "Big"}.<br />
        And you rolled {diceRes}. <br />
        <br />
        You {gameRes}.
      </p>
    </>
  );
};
