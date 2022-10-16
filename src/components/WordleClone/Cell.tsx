import { status } from "../../interfaces/history";
import classes from "./Cell.module.css";

export const Cell = ({
  char,
  status,
}: {
  char: string;
  status: status | null;
}) => {
  let cellClass = status ? `${classes.cell} ${classes[status]}` : classes.cell;
  return <td className={cellClass}>{char}</td>;
};
