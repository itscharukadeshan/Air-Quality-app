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
    const suggestions = await getCityNameByInput(value);
    setSuggestions(suggestions.slice(0, 5));
    if (!value) {
      setSuggestions([]);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    const formattedCity = inputValue.replace(/ /g, "-");
    try {
      setIsLoading(true);
      await getAirQuality(formattedCity);
      setSuggestions([]);
    } catch (error) {
      let errormessage = "An error occurred. Please try again later.";
      toast.error(errormessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectSuggestion = async (suggestion) => {
    const cityNames = suggestion.matching_full_name;
    const commonName = cityNames.split(",")[0];
    setInputValue(commonName);
    const formattedCity = commonName.replace(/ /g, "-");
    try {
      setIsLoading(true);
      await getAirQuality(formattedCity);
      setSuggestions([]);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
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
            <li
              className='p-4 shadow-2xl hover:bg-green-600 transition duration-300 cursor-pointer'
              key={suggestion.matching_full_name}
              onClick={() => handleSelectSuggestion(suggestion)}>
              {suggestion.matching_full_name}
            </li>
          ))}
        </ul>
      </div>

      <button type='submit' className='btn btn-outline btn-md btn-success'>
        {isLoading ? (
          <span className='loading loading-bars loading-sm'></span>
        ) : null}
        Search
      </button>
    </form>
  );
};

export default CitySearch;
