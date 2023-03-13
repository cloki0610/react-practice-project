import type { CalButtonProps } from "../../interfaces/CalculatorTypes";

export const CalButton = ({ action, onClick }: CalButtonProps) => {
  let btnClass = "";

  action.match(/\+|-|\*|\/|=/)
    ? (btnClass = `bg-secondary text-[16px] w-full p-[12px] border-0 rounded-md hover:opacity-80 active:opacity-80`)
    : action === "c"
    ? (btnClass = `bg-orange-500 text-[16px] w-full p-[12px] border-0 rounded-md hover:opacity-80 active:opacity-80`)
    : (btnClass = `bg-[#252424] text-[16px] w-full p-[12px] border-0 rounded-md hover:opacity-80 active:opacity-80`);

  return (
    <button className={btnClass} onClick={onClick}>
      {action.toUpperCase()}
    </button>
  );
};
