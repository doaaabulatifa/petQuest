import { db } from "@/lib/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import CustomSignInButton from "@/components/CustomSignInButton";

export default async function Pets() {
  "use server";
  const result = await db.query(`SELECT * FROM Pets`);
  const pets = result.rows;

  return (
    <div className="margintop padding-x">
      <SignedIn>
        <h1 className="flex justify-center padding-y text-xl font-medium">
          All Pets
        </h1>
        <div className="flex justify-center">
          <Link
            className="border bg-white border-blue-600 rounded-full py-3 px-10 text-blue-600"
            href="/newpost"
          >
            Make a new post
          </Link>
        </div>

        <div className="smallmargintop flex flex-wrap petinfo padding-y">
          {pets.map((pet, index) => (
            <div className="padding-x padding-y" key={index}>
              <Link href={`/pets/${pet.id}`} key={pet.id}>
                <div className="flex flex-col justify-between items-center border rounded-lg petimage2">
                  <img
                    src={pet.image_url}
                    alt={pet.breed}
                    className="petcardimage"
                  />

                  <h3 className="padding-y">
                    {pet.name} | {pet.age} years
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </SignedIn>

      <SignedOut>
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl font-medium">Please sign in to view the pets.</p>
          <div>
          <CustomSignInButton />
          </div>
        </div>
      </SignedOut>
    </div>
  );
}
