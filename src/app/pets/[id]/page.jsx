import { db } from "@/lib/db";
import AddComment from "@/components/AddComment";
import Showcomment from "@/components/ShowComment";

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

  return (
    <div className="flex-center flex-col text-center margintop">
      <h1>{pet.name}</h1>
      <div>
        <h3 className="padding-y">pet name: {pet.name}</h3>
        <h3>pet species: {pet.species}</h3>
        <h3>pet breed: {pet.breed}</h3>
        <h3>pet age: {pet.age}</h3>
        <h3>pet name: {pet.name}</h3>
        <h3>pet description: {pet.description}</h3>
        <div>{pet.image_url}</div>
        <h3>status: {pet.status}</h3>
        <h6>created_at: {new Date(pet.created_at).toLocaleString()}</h6>
        <h6>updated_at: {new Date(pet.updated_at).toLocaleString()}</h6>
        <p>pet location: {pet.location}</p>
        <AddComment postId={pet.id} />
        <Showcomment postId={pet.id} />
      </div>
    </div>
  );
}
