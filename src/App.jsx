/** @format */

import { useState } from "react";
import CitySearch from "./components/CitySearch";
import config from "../utils/config";
import ErrorBox from "./components/ErrorBox";
import AirQCard from "./components/AirQCard";
import PollutantInfo from "./components/PollutantInfo";
import AirQTable from "./components/AirQTable";
import NavBar from "./components/NavBar";

export default function App() {
  const [airQualityData, setAirQualityData] = useState(null);
  const [error, setError] = useState(null);

  const getAirQuality = async (city) => {
    try {
      const response = await fetch(
        `https://api.waqi.info/feed/${city}/?token=${config.aqiApiToken}`
      );
      const data = await response.json();
      console.log(data);

      if (response.ok && data.status === "ok") {
        setAirQualityData(data.data);
        setError(null);
      } else {
        setError(
          "We couldn't find your city please check the spelling of your search"
        );
        setTimeout(() => {
          setError(null);
        }, 1500);
      }
    } catch (err) {
      console.error(err.message);

      setError("There something wrong going own ! ");

      setAirQualityData(null);

      setTimeout(() => {
        setError(null);
      }, 1500);
    }
  };

  return (
    <div className='p-4'>
      <NavBar />
      <CitySearch getAirQuality={getAirQuality} />
      {error && <ErrorBox error={error} />}
      {airQualityData && (
        <>
          <AirQCard data={airQualityData} />
          <PollutantInfo pollutant={airQualityData.dominentpol} />
        </>
      )}
      <AirQTable />
    </div>
  );
}
