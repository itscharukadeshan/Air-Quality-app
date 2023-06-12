/** @format */

import React, { useState } from "react";

function CitySearch({ getAirQuality }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const formatCity = inputValue.replace(/ /g, "-");
    getAirQuality(formatCity);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='Enter the city'
          onChange={handleInputChange}
        />
        <button type='submit'>Search</button>
      </form>
    </>
  );
}

export default CitySearch;
