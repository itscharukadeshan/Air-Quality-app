/** @format */

import { toast } from "react-toastify";
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
      let errorMessage = "City air quality data not found !";
      if (data && data.data && data.data.message) {
        errorMessage = data.data.message;
      }

      toast.error(errorMessage);
    }
  } catch (err) {
    toast.error(errorMessage);
    throw new Error("There's something wrong going on!");
  }
};
