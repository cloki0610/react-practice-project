import type { BmiResProps } from "../../interfaces/BmiTypes";

export const BmiRes = ({ weight, height }: BmiResProps) => {
  const res: number =
    Math.floor((weight / Math.pow(height / 100, 2)) * 100) / 100;
  const resStyle: string =
    res < 18.5
      ? "text-orange-500"
      : res > 18.5 && res < 24
      ? "text-green-500"
      : "text-red-500";
  return (
    <div className="mt-11 flex flex-col justify-center items-center text-[18px]">
      {weight !== 0 && height !== 0 ? (
        <>
          <div className="flex gap-5">
            <p>Your Height: {height}</p>
            <p>Your weight: {weight}</p>
          </div>
          <p className="text-[24px]">
            Your BMI: <span className={resStyle}>{res}</span>
          </p>
        </>
      ) : (
        <p>Enter a valid height and weight to calculate your BMI</p>
      )}
    </div>
  );
};
