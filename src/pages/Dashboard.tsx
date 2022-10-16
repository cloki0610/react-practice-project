import React, { useState, useEffect } from "react";
import axios from "axios";

import { Dropdowns } from "../components/WeatherBoard/Dropdowns";
import { TemperatureData } from "../components/WeatherBoard/TemperatureData";
import { tempType } from "../components/WeatherBoard/interfaces";

const CITIES = [
  { name: "Ashfield", latitude: 53.08, longitude: -1.25 },
  { name: "London", latitude: 51.5, longitude: -0.126 },
  { name: "Taipei", latitude: 25.105, longitude: 121.597 },
  { name: "Hong Kong", latitude: 22.302, longitude: 114.177 },
];

type geoType = {
  lat: number | null;
  lon: number | null;
};

export const Dashboard = () => {
  const [temperature, setTemperature] = useState<tempType | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [geo, setGeo] = useState<geoType>({ lat: null, lon: null });
  const [error, setError] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setError(null);
    setCity(e.target.value);
    let geoInfo = null;
    switch (e.target.value) {
      case "Ashfield":
        geoInfo = { lat: CITIES[0].latitude, lon: CITIES[0].longitude };
        break;
      case "London":
        geoInfo = { lat: CITIES[1].latitude, lon: CITIES[1].longitude };
        break;
      case "Taipei":
        geoInfo = { lat: CITIES[2].latitude, lon: CITIES[2].longitude };
        break;
      case "Hong Kong":
        geoInfo = { lat: CITIES[3].latitude, lon: CITIES[3].longitude };
        break;
      default:
        geoInfo = { lat: null, lon: null };
        break;
    }
    setGeo(geoInfo);
  };

  useEffect(() => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${geo.lat}&longitude=${geo.lon}&hourly=temperature_2m`;
    const fetchData = async () => {
      try {
        const result = await axios(url);
        setTemperature(JSON.parse(result.request.response));
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }
    };
    if (city) {
      fetchData();
    }
  }, [geo.lat, geo.lon]);

  return (
    <div>
      <Dropdowns data={CITIES} onChange={handleChange} />
      {city ? <h2>{city}</h2> : <p>not select city yet</p>}
      {error && city && <p style={{ color: "red" }}>{error}</p>}
      <a href="https://open-meteo.com/">Weather data by Open-Meteo.com</a>
      <TemperatureData data={temperature} />
    </div>
  );
};
