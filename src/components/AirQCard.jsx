/** @format */

import React from "react";
import moment from "moment";

export default function AirQCard({ data }) {
  const { aqi, city, dominentpol, time } = data;

  const datetimeString = time.s;
  const formattedDateTime = moment(datetimeString).format("MMMM-DD h.mm A");

  const getCardColor = (aqi) => {
    if (aqi <= 50) {
      return "success text-white";
    } else if (aqi <= 100) {
      return "warning";
    } else if (aqi <= 150) {
      return "orange";
    } else if (aqi <= 200) {
      return "danger text-white";
    } else if (aqi <= 300) {
      return "unhealthy text-white";
    } else {
      return "hazardous";
    }
  };

  return (
    <div
      className={`card card-side bg-${getCardColor(aqi)} shadow-xl w-fit p-4`}>
      <figure>
        <img
          className='h-96 shadow-xl'
          src='https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-francisco-bay-area-7f6d130d20.jpg'
          alt={` image of ${city.name}`}
        />
      </figure>
      <div className='card-body text-black'>
        <h2 className='card-title font-mono text-5xl'>{city.name}</h2>
        <div className='py-4 font-sans font-bold text-2xl'>
          <div className='stats stats-vertical shadow'>
            <div className='stat'>
              <div className={`stat-title text-${getCardColor(aqi)}`}>
                Air Quality
              </div>
              <div className='stat-desc'>{formattedDateTime}</div>
              <div className='stat-value'>{aqi}</div>
            </div>

            <div className='stat'>
              <div className='stat-title'>Main Pollutant</div>
              <div className='stat-value'>{dominentpol}</div>
            </div>
          </div>
        </div>
        <div className='card-actions pt-4 justify-end'></div>
      </div>
    </div>
  );
}
