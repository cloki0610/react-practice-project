import React, { KeyboardEvent } from "react";
import classes from "./KeyboardButton.module.css";

export const KeyboardButton = ({
  action,
  onClick,
}: {
  action: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>, action: string) => void;
}) => {
  return (
    <button className={classes.btn} onClick={(e) => onClick(e, action)}>
      {action}
    </button>
  );
};
