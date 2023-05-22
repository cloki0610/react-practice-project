import React, { useState, useEffect, Suspense } from "react";
import { Await, defer, useLoaderData, LoaderFunction } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

import { Dropdowns } from "../components/WeatherBoard/Dropdowns";
import { TemperatureData } from "../components/WeatherBoard/TemperatureData";
import { loadWeathers } from "../utils/loadWeathers";
import type { tempType, geoType } from "../interfaces/WeatherBoardTypes";
import { container } from "../utils/motion";
import CITIES from "../constants/dummy-cities";

export const Dashboard = () => {
    const { weathers } = useLoaderData() as Awaited<ReturnType<typeof loader>>;
    const [temperature, setTemperature] = useState<tempType>(weathers);
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
        <Suspense fallback={<p className="text-center">Loading...</p>}>
            <Await resolve={weathers}>
                <section className="relative w-full h-screen mx-auto">
                    <div className="pt-[120px] flex flex-col justify-center items-center">
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className="bg-tertiary p-9 rounded-2xl w-[480px] flex flex-col"
                        >
                            <h1 className="text-[36px] font-bold select-none text-center">
                                Weather Board
                            </h1>
                            <Dropdowns data={CITIES} onChange={handleChange} />
                            {error && city && (
                                <p className="text-red-500">{error}</p>
                            )}
                            <TemperatureData data={temperature} />
                            <a
                                href="https://open-meteo.com/"
                                className="text-center mt-5 underline"
                            >
                                Weather data by Open-Meteo.com
                            </a>
                        </motion.div>
                    </div>
                </section>
            </Await>
        </Suspense>
    );
};

export const loader: LoaderFunction = async () => {
    const lat = CITIES[0].latitude;
    const lng = CITIES[0].longitude;
    const weathers = await loadWeathers(lat, lng);
    return defer({
        weathers,
    });
};
