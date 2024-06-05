"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Petinfo = ({ pet }) => {
  const router = useRouter();

  const handleAdoptRequest = () => {
    router.push(`/adoption-form?petId=${pet.id}`);
  };

  return (
    <div className="flex flex-col items-center my-8">
      <h1 className="text-3xl font-semibold mb-4">{pet.name}</h1>
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <img src={pet.image_url} alt={pet.name} className="petimage mb-4" />
        <div className="text-left w-full">
          <h3 className="text-lg font-medium my-2">Pet name: {pet.name}</h3>
          <h3 className="text-lg font-medium my-2">Pet species: {pet.species}</h3>
          <h3 className="text-lg font-medium my-2">Pet breed: {pet.breed}</h3>
          <h3 className="text-lg font-medium my-2">Pet age: {pet.age}</h3>
          <h3 className="text-lg font-medium my-2">Pet description: {pet.description}</h3>
          <h3 className="text-lg font-medium my-2">Status: {pet.status}</h3>
          <p className="text-sm text-gray-500">Created at: {new Date(pet.created_at).toLocaleString()}</p>
          <p className="text-sm text-gray-500">Updated at: {new Date(pet.updated_at).toLocaleString()}</p>
          <p className="text-lg font-medium my-2">Pet location: {pet.location}</p>
        </div>
        <button 
          onClick={handleAdoptRequest} 
          className="mt-6 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Adopt Request
        </button>
      </div>
    </div>
  );
};

export default Petinfo;
