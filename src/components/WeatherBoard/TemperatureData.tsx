import { v4 as uuidv4 } from "uuid";
import type {
  tempType,
  TempDataProps,
} from "../../interfaces/WeatherBoardTypes";

export const TemperatureData = ({ data }: TempDataProps) => {
  const generateDataDom = (d: tempType | null) => {
    let returnDom = [];
    const timeData = d?.hourly.time;
    const tempData = d?.hourly.temperature_2m;
    if (timeData && tempData) {
      for (let i = 0; i < timeData.length; i++) {
        returnDom.push(
          <tr key={uuidv4()}>
            <td className="text-left px-[5px] py-[20px] border-r border-white">
              {timeData[i].replace("T", " ")}
            </td>
            {tempData[i] * 1 > 28 ? (
              <td className="bg-red-500 text-left px-[5px] py-[20px]">
                {tempData[i]}°C
              </td>
            ) : (
              <td className="text-left px-[5px] py-[20px]">{tempData[i]}°C</td>
            )}
          </tr>
        );
      }
      return returnDom;
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className=" w-[600px] h-[350px] max-w-[80%] overflow-y-scroll">
        <table className="w-full text-left px-[5px] py-[20px]">
          <thead>
            <tr>
              <th className="bg-[#5c31db] text-left px-[5px] py-[10px] select-none">
                Time
              </th>
              <th className="bg-[#5c31db] text-left px-[5px] py-[10px] select-none">
                Temperature
              </th>
            </tr>
          </thead>
          <tbody>{generateDataDom(data)}</tbody>
        </table>
      </div>
    </div>
  );
};
