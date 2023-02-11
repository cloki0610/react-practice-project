import classes from "./Result.module.css";
import type { ResultProps } from "../../interfaces/CalculatorTypes";

export const Result = ({ result }: ResultProps) => {
  return <div className={classes.result}>{result}</div>;
};
