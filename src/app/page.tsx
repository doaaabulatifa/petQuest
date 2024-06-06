import React, { useEffect, useState } from "react";
import { fetchPets } from "../../utils/fetchPets";
import { HomeProps, PetProps } from "../../types";
import { petSpecies, petAges } from "../../constants";
import {
  PetCard,
  ShowMore,
  SearchBar,
  CustomFilter,
  Hero,
} from "../../components";

export default async function Home({ searchParams }: HomeProps) {
  const allPets = await fetchPets({
    breed: searchParams.breed || "",
    species: searchParams.species || "",
    age: searchParams.age || "",
    limit: searchParams.limit || 10,
    location: searchParams.location || "",
    offset: searchParams.offset || 0,
  });

  const isDataEmpty = !Array.isArray(allPets) || allPets.length < 1 || !allPets;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Featured Pets</h1>
          <p>Explore pets you might love to adopt</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="species" options={petSpecies} />
            <CustomFilter title="age" options={petAges} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__pets-wrapper">
              {allPets?.map((pet) => (
                <PetCard key={pet.id} pet={pet} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allPets.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
