/** @format */

import cities from "cities-list";

export const getCityNameByInput = (value) => {
  if (value.length < 2) {
    return [];
  }

  const citiesArray = Object.keys(cities);

  const filteredCities = citiesArray.filter((city) => {
    return city.toLowerCase().startsWith(value.toLowerCase());
  });

  return filteredCities.slice(0, 3).map((city) => {
    return {
      city,
    };
  });
};
