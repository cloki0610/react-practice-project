import { useReducer } from "react";
import { motion } from "framer-motion";

import { BmiRes } from "../components/BmiCalculator/BmiRes";
import type { BmiType, InputType } from "../interfaces/BmiTypes";
import { container } from "../utils/motion";

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
    <section className="relative w-full h-screen mx-auto">
      <div className="pt-[120px] flex flex-col justify-center items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="bg-tertiary p-11 rounded-2xl w-[480px] flex flex-col"
        >
          <h1 className="text-[36px] font-bold select-none text-center">
            BMI calculator
          </h1>
          <div className="mt-11 mb-5 flex flex-col justify-center items-center">
            <label htmlFor="height" className="font-bold">
              Height
            </label>
            <input
              type="number"
              name="height"
              className="text-center text-[24px] rounded-md h-[48px] my-2"
              placeholder="Enter your height"
              onChange={onChangeHandler}
            />
            <label htmlFor="weight" className="font-bold">
              Weight
            </label>
            <input
              type="number"
              name="weight"
              className="text-center text-[24px] rounded-md h-[48px] my-2"
              placeholder="Enter your weight"
              onChange={onChangeHandler}
            />
            <BmiRes weight={inputValues.weight} height={inputValues.height} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
