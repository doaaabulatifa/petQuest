"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Petinfo = ({ pet }) => {
  const router = useRouter();

  const handleAdoptRequest = () => {
    router.push(`/adoption-form?petId=${pet.id}`);
  };

  return (
    <div className="flex-center flex-col text-center margintop">
      <h1>{pet.name}</h1>
      <div>
        <h3 className="padding-y">Pet name: {pet.name}</h3>
        <h3>Pet species: {pet.species}</h3>
        <h3>Pet breed: {pet.breed}</h3>
        <h3>Pet age: {pet.age}</h3>
        <h3>Pet description: {pet.description}</h3>
        <div>
          <img src={pet.image_url} alt={pet.name} />
        </div>
        <h3>Status: {pet.status}</h3>
        <h6>Created at: {new Date(pet.created_at).toLocaleString()}</h6>
        <h6>Updated at: {new Date(pet.updated_at).toLocaleString()}</h6>
        <p>Pet location: {pet.location}</p>
        <button onClick={handleAdoptRequest}>Adopt Request</button>
      </div>
    </div>
  );
};

export default Petinfo;
