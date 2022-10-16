import React from "react";

interface ICity {
  name: string;
  latitude: number;
  longitude: number;
}

export const Dropdowns = ({
  data,
  onChange,
}: {
  data: ICity[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
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
