import type { KeyboardButtonProps } from "../../interfaces/WordleTypes";

export const KeyboardButton = ({ action, onClick }: KeyboardButtonProps) => {
  return (
    <button
      className="min-w-[40px] h-[40px] px-[10px] rounded-md font-bold bg-secondary hover:bg-[#3a3a3a] hover:text-[#fafafa] select-none cursor-pointer"
      onClick={(e) => onClick(e, action)}
    >
      {action}
    </button>
  );
};
