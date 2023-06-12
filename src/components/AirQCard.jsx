/** @format */

import React from "react";

export default function AirQCard({ data }) {
  const { aqi, city, dominentpol, time } = data;
  return (
    <div className='card card-side bg-base-100 shadow-xl w-fit'>
      <figure>
        <img src='#' alt={`${city.name}  image`} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{city.name}</h2>
        <p>Air Quality Index {aqi}</p>
        <p>Dominant pollutant {dominentpol}</p>
        <p>Time last updated {time.s}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>More data</button>
        </div>
      </div>
    </div>
  );
}
