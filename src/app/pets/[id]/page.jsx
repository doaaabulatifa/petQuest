import { db } from "@/lib/db";
import AddComment from "@/components/AddComment";
import Showcomment from "@/components/ShowComment";
// import Image from "next/image";

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

  console.log(pet);

  return (
    <div className="w-screen margintop flex justify-center">
      <div className="flex flex-col items-center">
        <h1 className="padding-y">Meet {pet.name}</h1>
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
        </div>{" "}
        <AddComment postId={pet.id} />
        <Showcomment postId={pet.id} />
      </div>
    </div>
  );
}
