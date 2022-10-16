import { v4 as uuidv4 } from "uuid";
import { tempType } from "./interfaces";
import classes from "./TemperatureData.module.css";

export const TemperatureData = ({ data }: { data: tempType | null }) => {
  const generateDataDom = (d: tempType | null) => {
    let returnDom = [];
    const timeData = d?.hourly.time;
    const tempData = d?.hourly.temperature_2m;
    if (timeData && tempData) {
      for (let i = 0; i < timeData.length; i++) {
        returnDom.push(
          <tr key={uuidv4()}>
            <td className={classes.time}>{timeData[i].replace("T", " ")}</td>
            {tempData[i] * 1 > 28 ? (
              <td className="hot">{tempData[i]}°C</td>
            ) : (
              <td>{tempData[i]}°C</td>
            )}
          </tr>
        );
      }
      return returnDom;
    }
  };
  return (
    <div className={classes.container}>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Time</th>
            <th>Temperature</th>
          </tr>
        </thead>
        <tbody>{generateDataDom(data)}</tbody>
      </table>
    </div>
  );
};
