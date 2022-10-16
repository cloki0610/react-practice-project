import React, { KeyboardEvent } from "react";
import { actions } from "../../utils/keyboardActions";
import { KeyboardButton } from "./KeyboardButton";

import classes from "./KeyboardArea.module.css";

export const KeyboardArea = ({
  onClick,
}: {
  onClick: (e: React.MouseEvent<HTMLButtonElement>, action: string) => void;
}) => {
  return (
    <div className={classes.keyboard}>
      {actions.map((action, i) => (
        <KeyboardButton key={`k-${i}`} action={action} onClick={onClick} />
      ))}
    </div>
  );
};
