import classes from "./Cell.module.css";
import type { CellProps } from "../../interfaces/WordleTypes";

export const Cell = ({ char, status }: CellProps) => {
  let cellClass = status ? `${classes.cell} ${classes[status]}` : classes.cell;
  return <td className={cellClass}>{char}</td>;
};
