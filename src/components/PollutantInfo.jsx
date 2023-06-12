/** @format */

import React from "react";

const PollutantInfo = ({ pollutant }) => {
  const getPollutantInfo = (pollutant) => {
    switch (pollutant) {
      case "pm25":
        return "PM2.5 are tiny particles in the air that reduce visibility and cause the air to appear hazy when levels are elevated. They can be a result of burning fossil fuels and chemical reactions.";
      case "pm10":
        return "PM10 are inhalable particles that are small enough to penetrate the thoracic region of the respiratory system. They can originate from dust stirred by vehicles on roads, wood burning, and other industrial activities.";
      case "o3":
        return "Ozone (O3) is a gas that occurs both in the Earth's upper atmosphere and at ground level. It can be good or bad for health and the environment, depending on its location in the atmosphere.";
      case "no2":
        return "Nitrogen Dioxide (NO2) primarily gets in the air from burning fuel. It can cause respiratory problems and contribute to the formation of other pollutants.";
      case "so2":
        return "Sulfur Dioxide (SO2) is produced from burning fossil fuels (coal and oil) and from smelting mineral ores. It can cause respiratory issues and contribute to the formation of other pollutants.";
      case "co":
        return "Carbon Monoxide (CO) is a harmful pollutant produced primarily from car exhausts. It is colorless, odorless, and can cause health problems at high levels.";
      default:
        return "No information available for the pollutant.";
    }
  };

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row'>
        <img
          src=''
          alt={`image of ${pollutant}`}
          className='max-w-sm rounded-lg shadow-2xl'
        />
        <div>
          <h1 className='text-5xl font-bold'>
            PRiMARY POLLUTANT - {pollutant.toUpperCase()}
          </h1>
          <p className='py-6'>{getPollutantInfo(pollutant)}</p>
          <button className='btn btn-primary'>Learn MORE</button>
        </div>
      </div>
    </div>
  );
};

export default PollutantInfo;