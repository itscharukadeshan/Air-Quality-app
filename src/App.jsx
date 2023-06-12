/** @format */

import { useState } from "react";
import CitySearch from "./components/CitySearch";
import ErrorBox from "./components/ErrorBox";
import AirQCard from "./components/AirQCard";
import PollutantInfo from "./components/PollutantInfo";
import AirQTable from "./components/AirQTable";
import NavBar from "./components/NavBar";
import { getAirQuality } from "./services/airQualityService";

export default function App() {
  const [airQualityData, setAirQualityData] = useState(null);
  const [error, setError] = useState(null);

  const handleGetAirQuality = async (city) => {
    try {
      const data = await getAirQuality(city);
      console.log(data);

      setAirQualityData(data);
      setError(null);
    } catch (err) {
      console.error(err.message);

      setError(err.message);
      setAirQualityData(null);
    }
  };

  return (
    <div className='p-4'>
      <NavBar />
      <CitySearch getAirQuality={handleGetAirQuality} />
      {error && <ErrorBox error={error} />}
      <div className='flex flex-row items-stretch m-4 gap-6'>
        {airQualityData && (
          <>
            <AirQCard data={airQualityData} />
          </>
        )}
        <AirQTable />
      </div>
      {airQualityData && (
        <>
          <PollutantInfo pollutant={airQualityData.dominentpol} />
        </>
      )}
    </div>
  );
}
