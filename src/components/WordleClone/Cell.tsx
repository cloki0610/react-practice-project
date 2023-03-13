import type { CellProps } from "../../interfaces/WordleTypes";

export const Cell = ({ char, status }: CellProps) => {
  const baseStyle =
    "h-[40px] min-w-[20px] rounded-md text-center font-bold select-none";
  const color =
    status === "true"
      ? "bg-green-500"
      : status === "good"
      ? "bg-orange-500"
      : status === "bad"
      ? "bg-gray-500"
      : "bg-secondary";
  const cellClass = `${baseStyle} ${color}`;
  return <td className={cellClass}>{char}</td>;
};
