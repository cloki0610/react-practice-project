import React, { useState, useEffect } from "react";
import axios from "axios";

import { Dropdowns } from "../components/WeatherBoard/Dropdowns";
import { TemperatureData } from "../components/WeatherBoard/TemperatureData";
import type { tempType, geoType } from "../interfaces/WeatherBoardTypes";
import CITIES from "../constants/dummy-cities";

export const Dashboard = () => {
  const [temperature, setTemperature] = useState<tempType | null>(null);
  const [city, setCity] = useState<string>("Ashfield");
  const [geo, setGeo] = useState<geoType>({
    lat: CITIES[0].latitude,
    lon: CITIES[0].longitude,
  });
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
