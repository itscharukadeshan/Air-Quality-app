/** @format */

import React from "react";

const PollutantInfo = ({ data }) => {
  const pollutant = data.dominentpol;
  const formattedPollutant = data.formattedPollutant;
  const getPollutantInfo = (pollutant) => {
    switch (pollutant) {
      case "pm25":
        return {
          name: "Particle matter",
          url: "https://www.epa.gov/pm-pollution",
          text: "PM2.5 are tiny particles in the air that reduce visibility and cause the air to appear hazy when levels are elevated. They can be a result of burning fossil fuels and chemical reactions.",
          pollutantData: {
            how: "PM2.5 particles can be released into the air through various sources such as vehicle emissions, industrial processes, construction activities, and wildfires.",
            effect:
              "Exposure to PM2.5 can lead to respiratory and cardiovascular problems, including asthma, bronchitis, and heart attacks. It can also contribute to premature death.",
            prevent:
              "To reduce exposure to PM2.5, it is advisable to minimize exposure to outdoor air pollution, use air purifiers indoors, and wear masks when necessary.",
          },
        };
      case "pm10":
        return {
          name: "Particle matter",
          url: "https://www.epa.gov/pm-pollution",
          text: "PM10 are inhalable particles that are small enough to penetrate the thoracic region of the respiratory system. They can originate from dust stirred by vehicles on roads, wood burning, and other industrial activities.",
          pollutantData: {
            how: "PM10 particles can be generated from activities such as vehicle traffic, construction and demolition, unpaved roads, and industrial processes.",
            effect:
              "Exposure to PM10 can cause respiratory issues, aggravate existing respiratory conditions, and contribute to the development of respiratory and cardiovascular diseases.",
            prevent:
              "To reduce exposure to PM10, it is recommended to limit outdoor activities during periods of high pollution, use air filters indoors, and maintain proper ventilation.",
          },
        };
      case "o3":
        return {
          name: "Ozone",
          url: "https://www.epa.gov/ozone-pollution",
          text: "Ozone (O3) is a gas that occurs both in the Earth's upper atmosphere and at ground level. It can be good or bad for health and the environment, depending on its location in the atmosphere.",
          pollutantData: {
            how: "Ground-level ozone is formed when nitrogen oxides (NOx) and volatile organic compounds (VOCs) react in the presence of sunlight. Major sources include vehicle exhaust, industrial emissions, and chemical solvents.",
            effect:
              "Exposure to high levels of ozone can result in respiratory problems, including coughing, throat irritation, and reduced lung function. It can also trigger asthma attacks and other respiratory conditions.",
            prevent:
              "To minimize exposure to ozone, it is advisable to stay indoors during peak ozone hours, avoid strenuous outdoor activities, and reduce emissions of ozone precursors by using cleaner fuels and reducing vehicle use.",
          },
        };
      case "no2":
        return {
          name: "Nitrogen Dioxide",
          url: "https://www.epa.gov/no2-pollution",
          text: "Nitrogen Dioxide (NO2) primarily gets in the air from burning fuel. It can cause respiratory problems and contribute to the formation of other pollutants.",
          pollutantData: {
            how: "NO2 is mainly produced by burning fossil fuels, such as vehicle emissions, power plants, and industrial processes.",
            effect:
              "Exposure to NO2 can lead to respiratory symptoms, such as coughing, wheezing, and shortness of breath. Prolonged exposure may increase the risk of respiratory infections and reduce lung function.",
            prevent:
              "To reduce exposure to NO2, it is recommended to minimize vehicle emissions, use public transportation or carpooling, and promote the use of cleaner energy sources.",
          },
        };
      case "so2":
        return {
          name: "Sulfur Dioxide",
          url: "https://www.epa.gov/so2-pollution",
          text: "Sulfur Dioxide (SO2) is produced from burning fossil fuels (coal and oil) and from smelting mineral ores. It can cause respiratory issues and contribute to the formation of other pollutants.",
          pollutantData: {
            how: "SO2 is primarily emitted by burning fossil fuels, particularly in power plants and industrial processes. It can also be released during the extraction and processing of certain metals.",
            effect:
              "Exposure to SO2 can result in respiratory symptoms, including coughing, shortness of breath, and chest tightness. It can worsen existing respiratory conditions such as asthma and increase the risk of respiratory infections.",
            prevent:
              "To minimize exposure to SO2, it is advisable to reduce the use of fossil fuels, promote renewable energy sources, and support stricter emission controls for industrial facilities.",
          },
        };
      case "co":
        return {
          name: "Carbon Monoxide",
          url: "https://www.epa.gov/co-pollution",
          text: "Carbon Monoxide (CO) is a harmful pollutant produced primarily from car exhausts. It is colorless, odorless, and can cause health problems at high levels.",
          pollutantData: {
            how: "CO is emitted from the incomplete combustion of carbon-based fuels, such as gasoline, diesel, and wood. The main sources include vehicle emissions, residential heating systems, and tobacco smoke.",
            effect:
              "Exposure to high levels of CO can lead to various health effects, including headaches, dizziness, nausea, and even death in severe cases. It binds to hemoglobin, reducing the blood's ability to carry oxygen.",
            prevent:
              "To prevent CO exposure, it is important to ensure proper ventilation when using fuel-burning appliances, maintain and inspect heating systems regularly, and never leave vehicles running in enclosed spaces.",
          },
        };
      default:
        return {
          name: "",
          url: "",
          text: "No information available for the pollutant.",
          pollutantData: {
            how: "",
            effect: "",
            prevent: "",
          },
        };
    }
  };
  const pollutantInfo = getPollutantInfo(pollutant);
  const pollutantData = pollutantInfo.pollutantData;

  return (
    <div>
      <a className={`group relative block h-64 sm:h-80 lg:h-96 `}>
        <div className='border border-gray-300 rounded-lg p-8'>
          <h3 className='mt-4 text-2xl font-bold'>
            Primary Pollutant{" "}
            <span>
              {formattedPollutant.letters}
              <sub className='text-sm font-light pl-2'>
                {formattedPollutant.numbers}
              </sub>
            </span>
          </h3>

          <p className='my-4 font-sans'>{pollutantInfo.text}</p>

          <div>
            {" "}
            <div className='join join-vertical w-full py-4 font-mono '>
              <div className='collapse collapse-arrow join-item border border-gray-300 border-opacity-50'>
                <input type='radio' name='my-accordion-4' />
                <div className='collapse-title text-base lg:text-lg font-bold'>
                  How does {pollutantInfo.name} {""}
                  get into the air
                </div>
                <div className='collapse-content font-sans'>
                  <p>{pollutantData.how}</p>
                </div>
              </div>
              <div className='collapse collapse-arrow join-item border border-gray-300 border-opacity-50'>
                <input type='radio' name='my-accordion-4' />
                <div className='collapse-title text-base lg:text-lg font-bold'>
                  Health and Environmental Effects of {pollutantInfo.name}
                </div>
                <div className='collapse-content font-sans '>
                  <p>{pollutantData.effect}</p>
                </div>
              </div>
              <div className='collapse collapse-arrow join-item border border-gray-300 border-opacity-50'>
                <input type='radio' name='my-accordion-4' />
                <div className='collapse-title text-base lg:text-lg font-bold'>
                  How Can I Reduce My Exposure to {pollutantInfo.name}
                </div>
                <div className='collapse-content font-sans'>
                  <p>{pollutantData.prevent}</p>
                </div>
              </div>
            </div>
          </div>

          <div className='pt-4'>
            <button
              className='btn btn-outline btn-success'
              onClick={() => window.open(pollutantInfo.url, "_blank")}>
              Read More
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PollutantInfo;
