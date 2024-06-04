// src/app/pets/[id]/page.jsx
import { getPetData } from "@/lib/data";
import Petinfo from "@/components/Petinfo";
import AddComment from "@/components/AddComment";
import ShowComment from "@/components/ShowComment";


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
    <>
   <Petinfo pet={pet} />
  <AddComment postId={pet.id} />
  <ShowComment postId={pet.id} />
  </>
)
}
