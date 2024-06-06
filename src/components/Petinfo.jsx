"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Petinfo = ({ pet }) => {
  const router = useRouter();

  const handleAdoptRequest = () => {
    router.push(`/adoption-form?petId=${pet.id}`);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-medium padding-y">Meet {pet.name}</h1>
      <div className="flex flex-col items-center sm:flex-row border padding-x padding-y">
        <img src={pet.image_url} alt={pet.breed} className="petimage" />
        <div className="flex flex-col petinfo">
          <h3>Name: {pet.name}</h3>
          <p>Age: {pet.age} years</p>
          <p>Location: {pet.location}</p>
          <p>Description: {pet.description}</p>
          <p>Species: {pet.species}</p>
          <p>Breed: {pet.breed}</p>
          <p>Status: {pet.status}</p>
          <h6>Posted: {new Date(pet.created_at).toLocaleString()}</h6>
          <h6>Updated: {new Date(pet.updated_at).toLocaleString()}</h6>
        </div>
      </div>

      <button
        className="smallmargintop text-lg text-blue font-semibold px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b from-gray-900 to-black hover:from-indigo-500 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        onClick={handleAdoptRequest}
      >
        Adopt Request
      </button>

      <Link
        className="smallmargintop text-lg text-blue font-semibold px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b from-gray-900 to-black hover:from-indigo-500 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        href="/pets"
      >
        Back to pets
      </Link>
    </div>
  );
};

export default Petinfo;
