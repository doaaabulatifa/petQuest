import user from "@/app/profile/[id]/page";
import { db } from "@/lib/db";
import Link from "next/link";

export default async function ShowUserPosts({ userId }) {
  const result = await db.query(
    `SELECT * FROM pets WHERE user_id = ${userId};`
  );

  const userPosts = result.rows;
  return (
    <div className="smallmargintop">
      <div className="flex flex-wrap petinfo padding-y">
        {userPosts.map((pet) => (
          <div className="padding-x padding-y" key={pet.id}>
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
