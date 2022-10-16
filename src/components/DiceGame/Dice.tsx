import classes from "./Dice.module.css";

export const Dice = ({ diceNum }: { diceNum: number }) => {
  return (
    <div className={classes.dice}>
      <div className={classes["dice-img"]}>{diceNum}</div>
    </div>
  );
};
