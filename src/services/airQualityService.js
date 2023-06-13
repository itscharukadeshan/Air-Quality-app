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
      let errorMessage =
        "We couldn't find your city. Please check the spelling of your search.";
      if (data && data.data && data.data.message) {
        errorMessage = data.data.message;
      }

      toast.warn(errorMessage);
    }
  } catch (err) {
    console.error(err.message);
    toast.error("There's something wrong going on!");
    throw new Error("There's something wrong going on!");
  }
};
