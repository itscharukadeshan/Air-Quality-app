/** @format */

import CitySearch from "./components/CitySearch";
import getAirQuality from "./services/airQualityApi";

export default function App() {
  const handleGetAirQuality = (city) => {
    getAirQuality(city);
  };
  return (
    <>
      <h1 className='text-3xl font-bold '>Air Quality Index Checker</h1>
      <CitySearch getAirQuality={handleGetAirQuality} />
    </>
  );
}
