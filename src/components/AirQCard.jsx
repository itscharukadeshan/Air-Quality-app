/** @format */

import React, { useState, useEffect } from "react";
import moment from "moment";
import calculateDiff from "../services/calculateDiff";

export default function AirQCard({ data }) {
  const { aqi, city, dominentpol, commonCityName, time } = data;

  const [textColor, setTextColor] = useState("");

  const updateTime = calculateDiff(time);

  const formattedCommonCityName = commonCityName.replace(/-/g, " ");

  const datetimeString = time.s;
  const formattedDate = moment(datetimeString).format("h.mm A");

  const cityNames = city.name;

  const locationName = cityNames.split(",").map((name, index) => ({
    id: index,
    name: name.trim(),
  }));

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
        setTextColor("black");
      } else if (
        cardColor === "danger" ||
        cardColor === "unhealthy" ||
        cardColor === "hazardous"
      ) {
        setTextColor("white");
      } else {
        setTextColor("");
      }
    };

    getColor(cardColor);
  }, [cardColor]);

  return data ? (
    <div
      className={
        "flex flex-col gap-4 mb-4 items-center w-fit bg-" +
        cardColor +
        " rounded-xl bg-clip-padding backdrop-filter backdrop-blur-lg p-8"
      }>
      <div
        className={` flex flex-col gap-2 items-center font-sans pt-4 font-extrabold text-4xl text-${textColor}`}>
        {`${formattedCommonCityName}`}
        <div className='font-mono text-2xl font-light'>{`(${locationName[0].name})`}</div>
      </div>
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
            <div className='stat-title'>Updated time{updateTime.hours}</div>
            <div className='stat-value'>{formattedDate}</div>
            <div className='stat-desc'></div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
