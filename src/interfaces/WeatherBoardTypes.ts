export type tempType = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: {
    time: string;
    temperature_2m: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
  };
};

export type geoType = {
  lat: number | null;
  lon: number | null;
};

type cityType = {
  name: string;
  latitude: number;
  longitude: number;
};

export type TempDataProps = { data: tempType | null };

export type DropdownsProps = {
  data: cityType[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
