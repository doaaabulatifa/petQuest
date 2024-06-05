import { db } from "@/lib/db";
import AddComment from "@/components/AddComment";
import ShowComment from "@/components/ShowComment";
import Link from "next/link";
import Petinfo from "@/components/Petinfo";
import EditPost from "@/components/EditPost"

//metadata
export async function generateMetadata({ params }) {
  const petId = params.id;
  const result = await db.query(`SELECT * FROM pets WHERE id = '${petId}'`);
  const pet = result.rows[0];
  return {
    title: `petQuest | ${pet.name}`,
    description: `${pet.description}`,
  };
}

//edf
export default async function pet({ params }) {
  const petId = params.id;
  const result = await db.query(`SELECT * FROM pets WHERE id = '${petId}'`);
  const pet = result.rows[0];

  if (!pet) {
    return <div>Pet not found</div>;
  }
  return (
    <div className="w-screen margintop flex justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-medium padding-y">Meet {pet.name}</h1>
        <div className="flex border padding-x padding-y">
           <Petinfo pet={pet} />
           <EditPost postId={pet.id} />
  <AddComment postId={pet.id} />
  <ShowComment postId={pet.id} />

       </div>
     
      </div>
    </div>
  );
}