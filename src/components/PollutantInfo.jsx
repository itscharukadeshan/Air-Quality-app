/** @format */

import React from "react";

const PollutantInfo = ({ data }) => {
  const pollutant = data.dominentpol;
  const formattedPollutant = data.formattedPollutant;
  const getPollutantInfo = (pollutant, formattedPollutant) => {
    switch (pollutant) {
      case "pm25":
        return {
          url: "https://www.epa.gov/pm-pollution",
          text: "PM2.5 are tiny particles in the air that reduce visibility and cause the air to appear hazy when levels are elevated. They can be a result of burning fossil fuels and chemical reactions.",
        };
      case "pm10":
        return {
          url: "https://www.epa.gov/pm-pollution",
          text: "PM10 are inhalable particles that are small enough to penetrate the thoracic region of the respiratory system. They can originate from dust stirred by vehicles on roads, wood burning, and other industrial activities.",
        };
      case "o3":
        return {
          url: "https://www.epa.gov/ozone-pollution",
          text: "Ozone (O3) is a gas that occurs both in the Earth's upper atmosphere and at ground level. It can be good or bad for health and the environment, depending on its location in the atmosphere.",
        };
      case "no2":
        return {
          url: "https://www.epa.gov/no2-pollution",
          text: "Nitrogen Dioxide (NO2) primarily gets in the air from burning fuel. It can cause respiratory problems and contribute to the formation of other pollutants.",
        };
      case "so2":
        return {
          url: "https://www.epa.gov/so2-pollution",
          text: "Sulfur Dioxide (SO2) is produced from burning fossil fuels (coal and oil) and from smelting mineral ores. It can cause respiratory issues and contribute to the formation of other pollutants.",
        };
      case "co":
        return {
          url: "https://www.epa.gov/co-pollution",
          text: "Carbon Monoxide (CO) is a harmful pollutant produced primarily from car exhausts. It is colorless, odorless, and can cause health problems at high levels.",
        };
      default:
        return {
          url: "",
          text: "No information available for the pollutant.",
        };
    }
  };

  const pollutantInfo = getPollutantInfo(pollutant);

  return (
    <div>
      <a className={`group relative block h-64 sm:h-80 lg:h-96 `}>
        <div className='border border-gray-300 rounded-lg p-8'>
          <h3 className='mt-4 text-2xl font-bold sm:text-2xl'>
            Primary Pollutant{" "}
            <span>
              {formattedPollutant.letters}
              <sub className='text-sm font-light pl-2'>
                {formattedPollutant.numbers}
              </sub>
            </span>
          </h3>
          <p className='my-4 text-sm sm:text-base'>{pollutantInfo.text}</p>
          <button
            className='btn btn-outline btn-success'
            onClick={() => window.open(pollutantInfo.url, "_blank")}>
            Read More
          </button>
        </div>
      </a>
    </div>
  );
};

export default PollutantInfo;
