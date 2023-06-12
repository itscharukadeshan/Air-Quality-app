/** @format */

import React from "react";

export default function AirQCard({ data }) {
  const { aqi, city, dominentpol, time } = data;

  const getCardColor = (aqi) => {
    if (aqi <= 50) {
      return "bg-success text-white";
    } else if (aqi <= 100) {
      return "bg-warning";
    } else if (aqi <= 150) {
      return "bg-orange";
    } else if (aqi <= 200) {
      return "bg-danger text-white";
    } else if (aqi <= 300) {
      return "bg-unhealthy text-white";
    } else {
      return "bg-hazardous";
    }
  };

  return (
    <div className={`card card-side ${getCardColor(aqi)} shadow-xl w-3/4 p-4`}>
      <figure>
        <img src='#' alt={` image of ${city.name}`} />
      </figure>
      <div className='card-body text-black'>
        <h2 className='card-title'>{city.name}</h2>
        <div className='py-4'>
          <p>Air Quality Index {aqi}</p>
          <p>Dominant pollutant {dominentpol}</p>
          <p>Time last updated {time.s}</p>
        </div>
        <div className='card-actions pt-4 justify-end'>
          <a href={city.url}>SEE MORE</a>
        </div>
      </div>
    </div>
  );
}
