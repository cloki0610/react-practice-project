import { useState, useEffect } from "react";
import type { timeLeftType } from "../interfaces/CounterType";

export const Counter = () => {
  const [timeLeft, setTimeLeft] = useState<timeLeftType>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
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
    <div style={{ display: "block" }}>
      <h1>
        Time Counter
        <br />
        {day !== 0 &&
          month !== 0 &&
          `${day}/${month}/${new Date().getFullYear()}`}
      </h1>
      <br />
      <label htmlFor="month">Month: </label>
      <input
        type="text"
        name="month"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (+e.target.value <= 12) {
            setMonth(+e.target.value);
          }
        }}
        value={month}
      />
      <br />
      <br />
      <label htmlFor="day">Day: </label>
      <input
        type="text"
        name="day"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (+e.target.value <= 31 && month == 2 && +e.target.value <= 29) {
            setDay(+e.target.value);
          }
        }}
        value={day}
      />
      {day !== 0 && month !== 0 && (
        <p>
          There are {timeLeft.days}day(s) {timeLeft.hours}hour(s){" "}
          {timeLeft.minutes}minute(s) {timeLeft.seconds}second(s) until {day}/
          {month}
        </p>
      )}
    </div>
  );
};
