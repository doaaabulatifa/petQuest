import { db } from "@/lib/db";
import AddPostForm from "../components/AddPostForm"

import Link from "next/link";
import pet from "./[id]/page";

export default async function Pets() {
  "use server";
  const result = await db.query(`SELECT * FROM Pets`);
  console.log(result);
  const pets = result.rows;
  console.log(pets);

  return (
    <div >
      <h1 >The Pets</h1>
      <div>
        {pets.map((pet, index) => (
          <div key={index}>
            <p>Click on pet box for more details:</p>
            <Link href={`/pets/${pet.id}`} key={pet.id}>
              <div>
                <h3 >{pet.name}</h3>
                <h3 >{pet.species}</h3>
                <h3 >{pet.image_url}</h3>
              </div>
            </Link>
          
          </div>
          
        ))}
          <AddPostForm  />
         
      </div>
    
    </div>
  );
}