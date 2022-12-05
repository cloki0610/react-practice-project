import { useReducer } from "react";

import { BmiRes } from "../components/BmiCalculator/BmiRes";

type StateType = {
  [name: string]: number;
};

export const Bmi = () => {
  const [inputValues, setInputValues] = useReducer(
    (state: StateType, newState: StateType) => ({
      ...state,
      ...newState,
    }),
    { height: 0, weight: 0 }
  );
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues({ [name]: +value });
  };

  return (
    <div style={{ display: "block" }}>
      <h1>BMI calculator</h1>
      <div>
        <span>Height</span>
        <br />
        <input
          type="number"
          name="height"
          placeholder="Enter your height"
          onChange={handleOnChange}
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
          onChange={handleOnChange}
        />
        <br />
        <span>{inputValues.weight} kg</span>
      </div>
      <BmiRes weight={inputValues.weight} height={inputValues.height} />
    </div>
  );
};
