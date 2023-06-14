/** @format */

import { useState } from "react";
import CitySearch from "./components/CitySearch";
import AirQCard from "./components/AirQCard";
import PollutantInfo from "./components/PollutantInfo";
import AirQTable from "./components/AirQTable";
import NavBar from "./components/NavBar";
import { getAirQuality } from "./services/airQualityService";
import { ToastContainer } from "react-toastify";
import "./toast-styles.css";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [airQualityData, setAirQualityData] = useState(null);
  const [error, setError] = useState(null);

  const handleGetAirQuality = async (city) => {
    try {
      const data = await getAirQuality(city);
      if (data) {
        data.commonCityName = await city;
      }
      if (data) {
        const pollutant = data.dominentpol;

        let letters = pollutant
          .split("")
          .filter((char) => /[a-zA-Z]/.test(char))
          .join("");
        let numbers = pollutant
          .split("")
          .filter((char) => /\d/.test(char))
          .join("");

        if (letters.toLowerCase() === "pm" && numbers === "25") {
          numbers = "2.5";
        }

        letters = letters.toUpperCase();

        data.formattedPolutent = {
          letters: letters,
          numbers: numbers,
        };
      }

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
    <div className='p-12'>
      <NavBar />
      <CitySearch getAirQuality={handleGetAirQuality} />
      <div className='flex md:flex-row justify-between mb-4 gap-6'>
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
      <ToastContainer />
    </div>
  );
}
