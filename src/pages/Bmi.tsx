import { useReducer } from "react";

import { BmiRes } from "../components/BmiCalculator/BmiRes";
import type { BmiType, InputType } from "../interfaces/BmiTypes";

const BmiReducer = (state: BmiType, newState: InputType) => ({
  ...state,
  ...newState,
});

export const Bmi = () => {
  const [inputValues, setInputValues] = useReducer(BmiReducer, {
    height: 0,
    weight: 0,
  });
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues({ [name]: +value });
  };

  return (
    <div className="block mt-5">
      <h1>BMI calculator</h1>
      <div>
        <span>Height</span>
        <br />
        <input
          type="number"
          name="height"
          placeholder="Enter your height"
          onChange={onChangeHandler}
        />
        <br />
        <span>{inputValues.height} cm</span>
      </div>
      <div>
        <span>Weight</span>
        <br />
        <input
          type="number"
          name="weight"
          placeholder="Enter your weight"
          onChange={onChangeHandler}
        />
        <br />
        <span>{inputValues.weight} kg</span>
      </div>
      <BmiRes weight={inputValues.weight} height={inputValues.height} />
    </div>
  );
};
