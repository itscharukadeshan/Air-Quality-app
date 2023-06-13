/** @format */
export const getCityNameByInput = async (value) => {
  try {
    const response = await fetch(
      `https://api.teleport.org/api/cities/?search=${value}`
    );
    const data = await response.json();
    return data._embedded["city:search-results"];
  } catch (error) {
    console.error(error);
    return [];
  }
};
