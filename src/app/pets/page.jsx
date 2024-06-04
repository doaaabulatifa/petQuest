import { db } from "@/lib/db";
import Link from "next/link";
import AddPostForm from "../../components/AddPostForm";

export default async function Pets() {
  "use server";
  const result = await db.query(`SELECT * FROM Pets`);
  console.log(result);
  const pets = result.rows;
  console.log(pets);

  return (
    <div className="margintop padding-x">
      <h1 className="flex justify-center">All Pets</h1>
      <div className="flex flex-wrap">
        {pets.map((pet, index) => (
          <div className="padding-x padding-y" key={index}>
            <p>Click on pet box for more details:</p>
            <Link href={`/pets/${pet.id}`} key={pet.id}>
              <div className="border">
                <h3>{pet.name}</h3>
                <h3>{pet.species}</h3>
                <h3>{pet.image_url}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <AddPostForm />
    </div>
  );
}
