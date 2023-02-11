import classes from "./Dice.module.css";
import type { DiceProps } from "../../interfaces/DashType";

export const Dice = ({ diceNum }: DiceProps) => {
  return (
    <div className={classes.dice}>
      <div className={classes["dice-img"]}>{diceNum}</div>
    </div>
  );
};
