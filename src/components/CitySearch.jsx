/** @format */

import React, { useState } from "react";

const CitySearch = ({ getAirQuality }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const formattedCity = inputValue.replace(/ /g, "-");
    getAirQuality(formattedCity);
  };
  return (
    <form onSubmit={handleSearch} className='mb-4 flex flex-row gap-4 py-6'>
      <input
        type='text'
        placeholder='Enter city...'
        onChange={handleInputChange}
        className='input input-bordered input-success w-1/2 max-w-xs'
      />
      <button type='submit' className='btn btn-outline btn-md btn-success'>
        Search
      </button>
    </form>
  );
};

export default CitySearch;
