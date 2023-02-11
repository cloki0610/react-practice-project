import { useReducer } from "react";

import { CalButton } from "../components/Calculator/CalButton";
import { Result } from "../components/Calculator/Result";
import { reducer } from "../utils/calc-reducer";
import classes from "./Calculator.module.css";

export const Calculator = () => {
  const [result, dispatch] = useReducer(reducer, { calcProgress: "0" });

  return (
    <div className={classes.wrapper}>
      <Result result={result.calcProgress} />
      <div className={classes["btn-wrapper"]}>
        <CalButton action="c" onClick={() => dispatch({ type: "c" })} />
      </div>
      <div className={classes["btn-wrapper"]}>
        <CalButton action="7" onClick={() => dispatch({ type: "7" })} />
        <CalButton action="8" onClick={() => dispatch({ type: "8" })} />
        <CalButton action="9" onClick={() => dispatch({ type: "9" })} />
        <CalButton action="/" onClick={() => dispatch({ type: "/" })} />
      </div>
      <div className={classes["btn-wrapper"]}>
        <CalButton action="4" onClick={() => dispatch({ type: "4" })} />
        <CalButton action="5" onClick={() => dispatch({ type: "5" })} />
        <CalButton action="6" onClick={() => dispatch({ type: "6" })} />
        <CalButton action="*" onClick={() => dispatch({ type: "*" })} />
      </div>
      <div className={classes["btn-wrapper"]}>
        <CalButton action="1" onClick={() => dispatch({ type: "1" })} />
        <CalButton action="2" onClick={() => dispatch({ type: "2" })} />
        <CalButton action="3" onClick={() => dispatch({ type: "3" })} />

        <CalButton action="-" onClick={() => dispatch({ type: "-" })} />
      </div>
      <div className={classes["btn-wrapper"]}>
        <CalButton action="0" onClick={() => dispatch({ type: "0" })} />
        <CalButton action="." onClick={() => dispatch({ type: "." })} />
        <CalButton action="=" onClick={() => dispatch({ type: "=" })} />
        <CalButton action="+" onClick={() => dispatch({ type: "+" })} />
      </div>
    </div>
  );
};
