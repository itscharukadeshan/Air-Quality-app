/** @format */

import config from "../../utils/config";

export const getAirQuality = async (city) => {
  try {
    const response = await fetch(
      `https://api.waqi.info/feed/${city}/?token=${config.aqiApiToken}`
    );
    const data = await response.json();

    if (response.ok && data.status === "ok") {
      return data.data;
    } else {
      throw new Error(
        "We couldn't find your city. Please check the spelling of your search."
      );
    }
  } catch (err) {
    console.error(err.message);
    throw new Error("There's something wrong going on!");
  }
};
