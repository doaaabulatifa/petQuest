"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import SearchBreed from "./SearchBreed"; // Import the new SearchBreed component

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

const SearchBar = () => {
  const [breed, setBreed] = useState("");
  const [location, setLocation] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (breed.trim() === "" && location.trim() === "") {
      return alert("Please provide some input");
    }

    updateSearchParams(breed.toLowerCase(), location.toLowerCase());
  };

  const updateSearchParams = (breed: string, location: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'breed' search parameter based on the 'breed' value
    if (breed) {
      searchParams.set("breed", breed);
    } else {
      searchParams.delete("breed");
    }

    // Update or delete the 'location' search parameter based on the 'location' value
    if (location) {
      searchParams.set("location", location);
    } else {
      searchParams.delete("location");
    }

    // Generate the new pathname with the updated search parameters
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchBreed
          breed={breed}
          setBreed={setBreed}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <div className='searchbar__item'>
        <Image
          src='/location-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='location'
        />
        <input
          type='text'
          name='location'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder='Location..'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;
