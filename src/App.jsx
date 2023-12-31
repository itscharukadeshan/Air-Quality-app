/** @format */

import { useState } from "react";
import CitySearch from "./components/CitySearch";
import AirQCard from "./components/AirQCard";
import PollutantInfo from "./components/PollutantInfo";
import AirQTable from "./components/AirQTable";
import NavBar from "./components/NavBar";
import { getAirQuality } from "./services/airQualityService";
import { ToastContainer, toast } from "react-toastify";
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

        data.formattedPollutant = {
          letters: letters,
          numbers: numbers,
        };
      }

      setAirQualityData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setAirQualityData(null);
      toast.error(error);
    }
  };

  return (
    <>
      <NavBar />
      <div className='p-12'>
        <div className='mb-4'>
          <CitySearch getAirQuality={handleGetAirQuality} />
        </div>
        <div className='flex flex-col md:flex-row justify-between gap-6'>
          {airQualityData && (
            <>
              <div className='md:w-1/2'>
                <AirQCard data={airQualityData} />
              </div>
            </>
          )}
          <div className='md:w-1/2'>
            <AirQTable />
          </div>
        </div>
        {airQualityData && (
          <>
            <PollutantInfo data={airQualityData} />
          </>
        )}
        <ToastContainer />
      </div>
    </>
  );
}
