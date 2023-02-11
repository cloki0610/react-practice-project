import { KeyboardButton } from "./KeyboardButton";
import { actions } from "../../utils/keyboard-actions";
import classes from "./KeyboardArea.module.css";
import type { KeyboardAreaProps } from "../../interfaces/WordleTypes";

export const KeyboardArea = ({ onClick }: KeyboardAreaProps) => {
  return (
    <div className={classes.keyboard}>
      {actions.map((action, i) => (
        <KeyboardButton key={`k-${i}`} action={action} onClick={onClick} />
      ))}
    </div>
  );
};
