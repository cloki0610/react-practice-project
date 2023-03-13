import { KeyboardButton } from "./KeyboardButton";
import { actions } from "../../utils/keyboard-actions";
import type { KeyboardAreaProps } from "../../interfaces/WordleTypes";

export const KeyboardArea = ({ onClick }: KeyboardAreaProps) => {
  return (
    <div className="flex flex-wrap w-[400px] gap-1 mt-4">
      {actions.map((action, i) => (
        <KeyboardButton key={`k-${i}`} action={action} onClick={onClick} />
      ))}
    </div>
  );
};
