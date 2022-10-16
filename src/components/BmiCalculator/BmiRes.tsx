import classes from "./BmiRes.module.css";

export const BmiRes = ({
  weight,
  height,
}: {
  weight: number;
  height: number;
}) => {
  const res: number =
    Math.floor((weight / Math.pow(height / 100, 2)) * 100) / 100;
  const resStyle =
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
