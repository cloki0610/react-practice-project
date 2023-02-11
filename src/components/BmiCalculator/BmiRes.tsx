import classes from "./BmiRes.module.css";
import type { BmiResProps } from "../../interfaces/BmiTypes";

export const BmiRes = ({ weight, height }: BmiResProps) => {
  const res: number =
    Math.floor((weight / Math.pow(height / 100, 2)) * 100) / 100;
  const resStyle: string =
    res < 18.5
      ? classes.under
      : res > 18.5 && res < 24
      ? classes.normal
      : classes.over;
  return (
    <>
      {weight && height ? (
        <p>
          Your BMI: <span className={resStyle}>{res}</span>
        </p>
      ) : (
        <p>Please enter a valid height and weight.</p>
      )}
    </>
  );
};
