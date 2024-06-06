import { PetMoreProps, FilterProps } from "../types";

// Utility function to update search parameters in the URL
export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Construct the updated URL pathname with the new search parameter
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

// Utility function to delete search parameters from the URL
export const deleteSearchParams = (type: string) => {
  // Get the current URL search params
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};

// Function to fetch pets based on filters
export async function fetchPets(filters: FilterProps) {
  const { breed, age, species } = filters;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "pets-by-api-ninjas.p.rapidapi.com",
  };

  // Construct the API URL with the given filters
  const response = await fetch(
    `https://pets-by-api-ninjas.p.rapidapi.com/v1/pets?breed=${breed}$age=${age}&location=${location}&species=${species}`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();

  return result;
}

// Function to generate a URL for pet images
export const generatePetImageUrl = (pet: PetMoreProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { breed, species, age, location } = pet;

  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  url.searchParams.append('breed', breed);

  if (species) {
    url.searchParams.append('species', species.split(" ")[0]);
  }

  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('location', location);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
}

