import classes from "./KeyboardButton.module.css";
import type { KeyboardButtonProps } from "../../interfaces/WordleTypes";

export const KeyboardButton = ({ action, onClick }: KeyboardButtonProps) => {
  return (
    <button className={classes.btn} onClick={(e) => onClick(e, action)}>
      {action}
    </button>
  );
};
