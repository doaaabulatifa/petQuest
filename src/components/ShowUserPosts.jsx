import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export default async function ShowUserPosts({ userId }) {
  const { userID } = auth();
  const result = await db.query(`SELECT * FROM pets WHERE user_id = $1;`, [
    userID,
  ]);

  return (
    <div className="smallmargintop">
      <h2 className="text-xl font-medium">User Posts:</h2>
      {result.length > 0 ? (
        userPosts.map((pet) => (
          <div key={pet.id}>
            <p>{pet.location}</p>
          </div>
        ))
      ) : (
        <p className="smallmargintop">No posts found for this user.</p>
      )}
    </div>
  );
}
