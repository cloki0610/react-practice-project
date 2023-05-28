import { KeyboardButton } from "./KeyboardButton";
import { ACTIONS } from "../../utils/keyboard-actions";
import type { KeyboardAreaProps } from "../../interfaces/WordleTypes";

export const KeyboardArea = ({ onClick, onKeyUp }: KeyboardAreaProps) => {
  return (
    <div
      className="flex flex-wrap w-[400px] gap-1 mt-4"
      onKeyUp={(e) => onKeyUp(e, e.key.toUpperCase())}
    >
      {ACTIONS.map((action, i) => (
        <KeyboardButton key={`k-${i}`} action={action} onClick={onClick} />
      ))}
    </div>
  );
};
