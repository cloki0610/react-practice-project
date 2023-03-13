import type { DropdownsProps } from "../../interfaces/WeatherBoardTypes";

export const Dropdowns = ({ data, onChange }: DropdownsProps) => {
  const options = data.map((each) => (
    <option value={each.name} label={each.name} key={`w-${each.name}`}>
      {each.name}
    </option>
  ));
  return (
    <div className="flex justify-center items-center">
      <select
        onChange={onChange}
        className="w-[50%] mb-3 py-2 text-[16px] rounded-md"
      >
        {options}
      </select>
    </div>
  );
};
