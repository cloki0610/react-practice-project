import axios from "axios";
import { json } from "react-router-dom";

export const loadWeathers = async (lat: number, lng: number) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m`;
  try {
    const response = await axios(url);
    const data = await response.data;
    return data;
  } catch (e) {
    if (e instanceof Error) {
      throw json(
        { message: "Could not fetch details from selected location." },
        { status: 500 }
      );
    }
  }
};
