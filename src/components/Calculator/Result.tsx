import classes from "./Result.module.css";

export const Result = ({ result }: { result: string }) => {
  return <div className={classes.result}>{result}</div>;
};
