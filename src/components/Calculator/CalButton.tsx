import classes from "./CalButton.module.css";

export const CalButton = ({
  action,
  onClick,
}: {
  action: string;
  onClick: () => void;
}) => {
  let btnClass = "";

  action.match(/\+|-|\*|\/|=/)
    ? (btnClass = `${classes.operator} ${classes.btn}`)
    : action === "c"
    ? (btnClass = `${classes.c} ${classes.btn}`)
    : (btnClass = `${classes.number} ${classes.btn}`);

  return (
    <button className={btnClass} onClick={onClick}>
      {action}
    </button>
  );
};
