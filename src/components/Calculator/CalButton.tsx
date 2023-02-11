import classes from "./CalButton.module.css";
import type { CalButtonProps } from "../../interfaces/CalculatorTypes";

export const CalButton = ({ action, onClick }: CalButtonProps) => {
  let btnClass = "";

  action.match(/\+|-|\*|\/|=/)
    ? (btnClass = `${classes.operator} ${classes.btn}`)
    : action === "c"
    ? (btnClass = `${classes.c} ${classes.btn}`)
    : (btnClass = `${classes.number} ${classes.btn}`);

  return (
    <button className={btnClass} onClick={onClick}>
      {action}
    </button>
  );
};
