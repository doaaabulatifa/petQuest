
import { db } from "@/lib/db";
import AddComment from "../../components/Addcomment";



export async function generateMetadata({ params }) {
  console.log(params);

  const petId = params.id;
  console.log(params.id);

  const result = await db.query(`SELECT * FROM pets WHERE id = '${petId}'`);

  const pet = result.rows[0];
  console.log(result);
  return {
    title: `pet name: ${pet.name}`,
    description: ` ${pet.description}`,
  };
}

export default async function pet({ params }) {
  const petId = params.id;
  console.log("pettttttt");
  console.log(petId);

  const result = await db.query(`SELECT * FROM pets WHERE id = '${petId}'`);

  const pet = result.rows[0];
  console.log("ttttttttttttttttttttttt");
  console.log(pet);

  return (
    <div>
      <h1>{pet.name}</h1>
      <div>
        <h3>pet name: {pet.name}</h3>
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
        
      </div>
    </div>
  );
}
