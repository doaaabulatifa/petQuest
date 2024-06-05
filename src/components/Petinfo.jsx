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
      <div className="flex border padding-x padding-y">
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
      <Link
        className=" smallmargintop border bg-white border-blue-600 rounded-full py-3 px-10 text-blue-600"
        href="/pets"
      >
        Back to pets
      </Link>
      <button
        className=" smallmargintop border bg-white border-blue-600 rounded-full py-3 px-10 text-blue-600"
        onClick={handleAdoptRequest}
      >
        Adopt Request
      </button>
    </div>
  );
};

export default Petinfo;
