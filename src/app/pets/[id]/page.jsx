// src/app/pets/[id]/page.jsx
import { getPetData } from "@/lib/data";
import Petinfo from "@/components/Petinfo";
import AddComment from "@/components/AddComment";

import ShowComment from "@/components/ShowComment";


import Link from "next/link";


export async function generateMetadata({ params }) {
  const pet = await getPetData(params.id);
  return {
    title: `petQuest | ${pet.name}`,
    description: `${pet.description}`,
  };
}

export default async function Page({ params }) {
  const pet = await getPetData(params.id);
  const petId = pet.id;
  console.log("trying to find out what pet is :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::$$$$$$$$$$$$::::$$$$")
  console.log(params)
  console.log(pet)
  console.log(petId)

  if (!pet) {
    return <div>Pet not found</div>;
  }


  return(
  


    <div className="w-screen margintop flex justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-medium padding-y">Meet {pet.name}</h1>
        <div className="flex border padding-x padding-y">
           <Petinfo pet={pet} />
  <AddComment postId={pet.id} />
  <ShowComment postId={pet.id} />
       
       </div>
     
      </div>
    </div>
  );

}
