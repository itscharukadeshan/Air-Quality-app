/** @format */
export const getCitySuggestions = (searchTerm) => {
  const normalizedSearchTerm = searchTerm.toLowerCase();

  return cities
    .filter(city => 
      city.toLowerCase().includes(normalizedSearchTerm)
    )
    .slice(0,5); 
};
