import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import type { timeLeftType } from "../interfaces/CounterType";
import { container } from "../utils/motion";

export const Counter = () => {
  const [timeLeft, setTimeLeft] = useState<timeLeftType>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    year: new Date().getFullYear(),
  });
  const [day, setDay] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const calulateTimeLeft = (m: number, d: number) => {
    let year = new Date().getFullYear();
    let month = new Date().getMonth();

    let different = null;
    let timeLeft = {};
    if (month >= m || (month === m && day >= d)) {
      different =
        new Date(`${m}/${d}/${year + 1}`).getTime() - new Date().getTime();
      year += 1;
    } else {
      different =
        new Date(`${m}/${d}/${year}`).getTime() - new Date().getTime();
    }

    if (different > 0) {
      timeLeft = {
        days: Math.floor(different / (1000 * 60 * 60 * 24)),
        hours: Math.floor((different / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((different / (1000 * 60)) % 60),
        seconds: Math.floor((different / 1000) % 60),
        year,
      };
    }

    return timeLeft as timeLeftType;
  };
  useEffect(() => {
    let id = setTimeout(() => {
      setTimeLeft(calulateTimeLeft(month, day));
    }, 1000);
    return function () {
      clearTimeout(id);
    };
  }, [timeLeft]);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="pt-[120px] flex justify-center items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="bg-tertiary p-11 rounded-2xl w-[480px] flex flex-col"
        >
          <h1 className="text-[36px] font-bold select-none text-center">
            Time Counter
          </h1>
          <h1 className="text-[36px] font-bold select-none text-center">
            {day !== 0 && month !== 0 && `${day}/${month}/${timeLeft.year}`}
          </h1>
          {day !== 0 && month !== 0 && (
            <p className="text-center text-[16px] rounded-md mb-11">
              {timeLeft.days} day(s) {timeLeft.hours} hour(s) {timeLeft.minutes}{" "}
              minute(s) {timeLeft.seconds} second(s)
            </p>
          )}
          <label htmlFor="month" className="font-bold">
            MONTH
          </label>
          <input
            type="text"
            name="month"
            className="text-center text-[24px] rounded-md h-[48px] my-2"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (+e.target.value <= 12) {
                setMonth(+e.target.value);
              }
            }}
            value={month}
          />
          <br />
          <br />
          <label htmlFor="day" className="font-bold">
            DAY
          </label>
          <input
            type="text"
            name="day"
            className="text-center text-[24px] rounded-md h-[48px] my-2"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (
                (month === 2 && +e.target.value <= 29) ||
                ((month === 2 || month === 4 || month === 6 || month === 11) &&
                  +e.target.value <= 30) ||
                ((month === 1 ||
                  month === 3 ||
                  month === 5 ||
                  month === 7 ||
                  month === 8 ||
                  month === 10 ||
                  month === 12) &&
                  +e.target.value <= 31)
              ) {
                setDay(+e.target.value);
              }
            }}
            value={day}
          />
        </motion.div>
      </div>
    </section>
  );
};
