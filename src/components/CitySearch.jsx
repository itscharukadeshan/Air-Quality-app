/** @format */

import React, { useState } from "react";
import { getCityNameByInput } from "../services/searchServices";
import { toast } from "react-toastify";

const CitySearch = ({ getAirQuality }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = async (event) => {
    const value = event.target.value;

    setInputValue(value);

    const cities = getCityNameByInput(value);

    const suggestions = cities.map((city) => city.city).slice(0, 5);

    setSuggestions(suggestions);

    if (!value) {
      setSuggestions([]);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    const formattedCity = inputValue.trim().replace(/ /g, "-");
    try {
      setIsLoading(true);
      await getAirQuality(formattedCity);
      setSuggestions([]);
    } catch (error) {
      let errormessage = "An error occurred. Please try again later.";
      toast.error(errormessage);
    } finally {
      setSuggestions([]);
      setIsLoading(false);
    }
  };

  const handleSelectSuggestion = async (suggestion) => {
    const cityName = suggestion;

    setInputValue(cityName);

    try {
      setIsLoading(true);

      await getAirQuality(cityName);

      setSuggestions([]);
    } catch (error) {
      throw Error(`an error encored ${error}`);
    } finally {
      setSuggestions([]);

      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSearch} className='mb-4 flex flex-row py-6'>
      <div className='flex flex-col'>
        <input
          type='text'
          placeholder='Enter city...'
          value={inputValue}
          onChange={handleInputChange}
          className='input input-bordered join-item'
        />
        <ul className='font-bold bg-opacity-30 bg-gray-700 rounded-b-xl shadow-sm'>
          {suggestions.map((suggestion) => (
            <li
              className='p-4 shadow-2xl hover:bg-gray-600 text-gray-300 hover:text-black transition duration-300 cursor-pointer'
              key={suggestion}
              onClick={() => handleSelectSuggestion(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      </div>

      <button type='submit' className='btn join-item rounded-r-full'>
        {isLoading ? (
          <span className='loading loading-bars loading-sm'></span>
        ) : null}
        Search
      </button>
    </form>
  );
};

export default CitySearch;
