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
      let errorMessage = "City not found. Please check your search spellings";
      if (data && data.data && data.data.message) {
        errorMessage = data.data.message;
      }

      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "dark-toast",
        bodyClassName: "dark-toast-body",
      });
    }
  } catch (err) {
    toast.error(errorMessage, {
      position: "top-right",
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "dark-toast",
      bodyClassName: "dark-toast-body",
    });
    throw new Error("There's something wrong going on!");
  }
};
