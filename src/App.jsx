/** @format */

import CitySearch from "./components/CitySearch";
import { useState } from "react";

export default function App() {
  const [airQualityData, setAirQualityData] = useState(null);
  const [error, setError] = useState(null);

  const getAirQuality = async (city) => {
    try {
      const response = await fetch(
        `https://api.waqi.info/feed/${city}/?token=dbf08cce6f3705d9a9d8349576308958cf75cbd9`
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
      }
    } catch (err) {
      console.error(err.message);

      setError("There something wrong in our side ");

      setAirQualityData(null);
    }
    console.log(airQualityData);
  };
  return (
    <div className='p-4'>
      <h1 className='text-3xl font-bold '>Air Quality Index Checker</h1>
      <CitySearch getAirQuality={getAirQuality} />
    </div>
  );
}
