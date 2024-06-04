import { db } from "@/lib/db";
import ShowUserPosts from "@/components/ShowUserPosts";

//metadata
export async function generateMetadata({ params }) {
  const userId = params.id;
  const result = await db.query(`SELECT * FROM users2 WHERE  id = '${userId}'`);
  const user = result.rows[0];

  return {
    title: `petQuest | ${user.username}`,
    description: ` ${user.bio}`,
  };
}

//edf
export default async function user({ params }) {
  const userId = params.id;
  const result = await db.query(`SELECT * FROM users2 WHERE id = '${userId}'`);
  const user = result.rows[0];

  return (
    <div className="flex-center flex-col text-center margintop">
      <h1>{user.username}</h1>
      <div>
        <h3>username: {user.username}</h3>
        <p>email: {user.email}</p>
        <p>bio: {user.bio}</p>
        <p>location: {user.location}</p>
      </div>
      <ShowUserPosts userId={user.id} />
    </div>
  );
}
