/** @format */

import React, { useState } from "react";
import { getCityNameByInput } from "../services/searchServices";

const CitySearch = ({ getAirQuality }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setInputValue(value);
    const suggestions = await getCityNameByInput(value);
    setSuggestions(suggestions.slice(0, 5));
    if (!value) {
      setSuggestions([]);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const formattedCity = inputValue.replace(/ /g, "-");
    getAirQuality(formattedCity);
  };
  return (
    <form onSubmit={handleSearch} className='mb-4 flex flex-row gap-4 py-6'>
      <div className='flex flex-col'>
        <input
          type='text'
          placeholder='Enter city...'
          value={inputValue}
          onChange={handleInputChange}
          className='input input-bordered input-success w-full'
        />
        <ul className='font-bold bg-opacity-30 bg-green-700 rounded-b-xl shadow-xl'>
          {suggestions.map((suggestion) => (
            <li className='p-4 shadow-2xl' key={suggestion.matching_full_name}>
              {suggestion.matching_full_name}
            </li>
          ))}
        </ul>
      </div>

      <button type='submit' className='btn btn-outline btn-md btn-success'>
        Search
      </button>
    </form>
  );
};

export default CitySearch;
