import Image from "next/image";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";

import { breedsList } from "../constants"; // Assuming you have a list of pet breeds in @constants
import { SearchBreedProps } from "../types"; // Import the correct type

const SearchBreed = ({ breed, setBreed }: SearchBreedProps) => {
  const [query, setQuery] = useState("");

  const filteredBreeds =
    query === ""
      ? breedsList
      : breedsList.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className='search-breed'>
      <Combobox value={breed} onChange={setBreed}>
        <div className='relative w-full'>
          {/* Button for the combobox. Click on the icon to see the complete dropdown */}
          <Combobox.Button className='absolute top-[14px] left-[4px]'>
            <Image
              src='/paws.png'
              width={20}
              height={20}
              className='ml-4'
              alt='breed icon'
            />
          </Combobox.Button>

          {/* Input field for searching */}
          <Combobox.Input
            className='search-breed__input'
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
            placeholder='Breed..'
          />

          {/* Transition for displaying the options */}
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery("")} // Reset the search query after the transition completes
          >
            <Combobox.Options
              className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
              static
            >
              {filteredBreeds.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className='search-breed__option'
                >
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredBreeds.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-breed__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchBreed;
