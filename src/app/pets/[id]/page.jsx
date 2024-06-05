import { db } from "@/lib/db";
import AddComment from "@/components/AddComment";
import Showcomment from "@/components/ShowComment";
import Petinfo from "@/components/Petinfo";
// import { getPetData } from "@/lib/data";

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
        <Petinfo pet={pet} />
        <AddComment postId={pet.id} />
        <Showcomment postId={pet.id} />
      </div>
    </div>
  );
}
