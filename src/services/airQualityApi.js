/** @format */
import config from "../../config";
import { useState } from "react";

const getAirQuality = async (city) => {
  const [airQualityData, setAirQualityData] = useState(null);
  const [error, setError] = useState(null);
  try {
    const response = await fetch(
      `https://api.waqi.info/feed/${city}/?token=${config.air_quality_api_token}`
    );
    const data = await response.json();

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
};

export default getAirQuality;
