import { Reducer } from "react";
import type { CalAction, CalState } from "../interfaces/CalculatorTypes";

export const reducer: Reducer<CalState, CalAction> = (
  state: { calcProgress: string },
  action: { type: string }
) => {
  let lastAlphabet = state.calcProgress[state.calcProgress.length - 1];
  switch (action.type) {
    case "+":
      return keyOperator(state.calcProgress, "+");
    case "-":
      return keyOperator(state.calcProgress, "-");
    case "*":
      return keyOperator(state.calcProgress, "*");
    case "/":
      return keyOperator(state.calcProgress, "/");
    case "=":
      return handleCalculate(state.calcProgress);
    case ".":
      if (lastAlphabet === ".") {
        return { calcProgress: state.calcProgress };
      } else {
        return { calcProgress: state.calcProgress + "." };
      }
    case "c":
      return { calcProgress: "0" };
    case "0":
      return keyNumber(state.calcProgress, "0");
    case "1":
      return keyNumber(state.calcProgress, "1");
    case "2":
      return keyNumber(state.calcProgress, "2");
    case "3":
      return keyNumber(state.calcProgress, "3");
    case "4":
      return keyNumber(state.calcProgress, "4");
    case "5":
      return keyNumber(state.calcProgress, "5");
    case "6":
      return keyNumber(state.calcProgress, "6");
    case "7":
      return keyNumber(state.calcProgress, "7");
    case "8":
      return keyNumber(state.calcProgress, "8");
    case "9":
      return keyNumber(state.calcProgress, "9");
    default:
      throw new Error("some error happened");
  }
};

const keyNumber = (currentStr: string, targetNumString: string) => {
  let returnNumStr = { calcProgress: "" };
  currentStr === "0"
    ? (returnNumStr = { calcProgress: targetNumString })
    : (returnNumStr = {
        calcProgress: currentStr.concat(targetNumString),
      });
  return returnNumStr;
};

const keyOperator = (currentStr: string, targetOpartorString: string) => {
  let returnStr = { calcProgress: "" };
  let lastAlphabet = currentStr[currentStr.length - 1];
  let operatorRegex = /\+|\-|\*|\//g;
  if (lastAlphabet.match(operatorRegex) === null) {
    returnStr = { calcProgress: currentStr.concat(targetOpartorString) };
  } else {
    returnStr = {
      calcProgress: currentStr
        .slice(0, currentStr.length - 1)
        .concat(targetOpartorString),
    };
  }
  return returnStr;
};

const handleCalculate = (currentStr: string) => {
  let result = eval(currentStr).toString();
  return { calcProgress: result };
};
