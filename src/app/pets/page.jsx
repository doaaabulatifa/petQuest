import { db } from "@/lib/db";
import Link from "next/link";

export default async function Pets() {
  "use server";
  const result = await db.query(`SELECT * FROM Pets`);
  console.log(result);
  const pets = result.rows;
  console.log(pets);

  return (
    <div className="margintop padding-x">
      <h1 className="flex justify-center padding-y text-xl font-medium">
        All Pets
      </h1>
      <div className="flex flex-wrap petinfo padding-y">
      <Link
        className="smallmargintop border bg-white border-blue-600 rounded-full py-3 px-10 text-blue-600"
        href="/newpost"
      >
        Make a new post
      </Link>
        {pets.map((pet, index) => (
          <div className="padding-x padding-y" key={index}>
            <Link href={`/pets/${pet.id}`} key={pet.id}>
              <div className="flex flex-col justify-between items-center border rounded-lg petimage2">
                <img
                  src={pet.image_url}
                  alt={pet.breed}
                  className=" petcardimage"
                />

                <h3 className="padding-y">
                  {pet.name} | {pet.age} years
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
