import type { DropdownsProps } from "../../interfaces/WeatherBoardTypes";

export const Dropdowns = ({ data, onChange }: DropdownsProps) => {
  const options = data.map((each) => (
    <option value={each.name} label={each.name} key={`w-${each.name}`}>
      {each.name}
    </option>
  ));
  return (
    <div>
      <select onChange={onChange}>{options}</select>
    </div>
  );
};
