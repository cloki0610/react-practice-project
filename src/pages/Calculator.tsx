import { useReducer } from "react";
import { motion } from "framer-motion";

import { CalButton } from "../components/Calculator/CalButton";
import { Result } from "../components/Calculator/Result";
import { reducer } from "../utils/calc-reducer";
import { container } from "../utils/motion";

export const Calculator = () => {
  const [result, dispatch] = useReducer(reducer, { calcProgress: "0" });

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="pt-[120px] flex flex-col justify-center items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="bg-tertiary p-11 rounded-2xl w-[480px] flex flex-col items-center justify-center"
        >
          <h1 className="text-[36px] font-bold select-none text-center mb-9">
            Simple Calculator
          </h1>
          <div className="bg-[#383838] w-[360px] p-5 border-2 border-white-100 rounded-2xl">
            <Result result={result.calcProgress} />
            <div className="flex justify-center items-center mt-3 mb-3">
              <CalButton action="c" onClick={() => dispatch({ type: "c" })} />
            </div>
            <div className="flex justify-center items-center gap-3 mb-3">
              <CalButton action="7" onClick={() => dispatch({ type: "7" })} />
              <CalButton action="8" onClick={() => dispatch({ type: "8" })} />
              <CalButton action="9" onClick={() => dispatch({ type: "9" })} />
              <CalButton action="/" onClick={() => dispatch({ type: "/" })} />
            </div>
            <div className="flex justify-center items-center gap-3 mb-3">
              <CalButton action="4" onClick={() => dispatch({ type: "4" })} />
              <CalButton action="5" onClick={() => dispatch({ type: "5" })} />
              <CalButton action="6" onClick={() => dispatch({ type: "6" })} />
              <CalButton action="*" onClick={() => dispatch({ type: "*" })} />
            </div>
            <div className="flex justify-center items-center gap-3 mb-3">
              <CalButton action="1" onClick={() => dispatch({ type: "1" })} />
              <CalButton action="2" onClick={() => dispatch({ type: "2" })} />
              <CalButton action="3" onClick={() => dispatch({ type: "3" })} />

              <CalButton action="-" onClick={() => dispatch({ type: "-" })} />
            </div>
            <div className="flex justify-center items-center gap-3">
              <CalButton action="0" onClick={() => dispatch({ type: "0" })} />
              <CalButton action="." onClick={() => dispatch({ type: "." })} />
              <CalButton action="=" onClick={() => dispatch({ type: "=" })} />
              <CalButton action="+" onClick={() => dispatch({ type: "+" })} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
