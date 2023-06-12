/** @format */

import React, { useState, useEffect } from "react";
import moment from "moment";

export default function AirQCard({ data }) {
  const { aqi, city, dominentpol, time } = data;
  const [textColor, setTextColor] = useState("");

  const datetimeString = time.s;
  const formattedDate = moment(datetimeString).format("h.mm A");

  const getCardColor = (aqi) => {
    if (aqi <= 50) {
      return "success";
    } else if (aqi <= 100) {
      return "warning";
    } else if (aqi <= 150) {
      return "orange";
    } else if (aqi <= 200) {
      return "danger";
    } else if (aqi <= 300) {
      return "unhealthy";
    } else {
      return "hazardous";
    }
  };

  const cardColor = getCardColor(aqi);

  useEffect(() => {
    const getColor = (cardColor) => {
      if (
        cardColor === "success" ||
        cardColor === "warning" ||
        cardColor === "orange"
      ) {
        setTextColor("white");
      } else if (
        cardColor === "danger" ||
        cardColor === "unhealthy" ||
        cardColor === "hazardous"
      ) {
        setTextColor("black");
      } else {
        setTextColor("");
      }
    };

    getColor(cardColor);
  }, [cardColor]);

  return (
    <div
      className={
        "flex flex-col gap-4 mb-4 items-center w-auto bg-" +
        cardColor +
        " rounded-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 p-8"
      }>
      <h2 className={`font-mono font-extrabold text-4xl text-${textColor}`}>
        {city.name}
      </h2>
      <div>
        <div className='stats shadow'>
          <div className='stat place-items-center'>
            <div className='stat-title'>Air Quality</div>
            <div className='stat-value'>{aqi}</div>
            <div className='stat-desc'> </div>
          </div>

          <div className='stat place-items-center'>
            <div className='stat-title'>Dominant Pollutant</div>
            <div className='stat-value'>{dominentpol}</div>
            <div className='stat-desc'></div>
          </div>

          <div className='stat place-items-center'>
            <div className='stat-title'>Updated time ({time.tz} ) </div>
            <div className='stat-value'>{formattedDate}</div>
            <div className='stat-desc'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
