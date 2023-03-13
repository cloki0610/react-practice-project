import type { ResultProps } from "../../interfaces/CalculatorTypes";

export const Result = ({ result }: ResultProps) => {
  return (
    <div className=" bg-black text-right text-[36px] text-white px-3 h-[48px] rounded-md select-none">
      {result}
    </div>
  );
};
