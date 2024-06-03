import ShowUserPosts from "../../components/ShowUserposts";
import { db } from "@/lib/db";

export async function generateMetadata({ params }) {
  const userId = params.id;
  const result = await db.query(`SELECT * FROM users2 WHERE  id = '${userId}'`);
  const user = result.rows[0];

  return {
    title: `petQuest | ${user.username}`,
    description: ` ${user.bio}`,
  };
}

export default async function user({ params }) {
  const userId = params.id;
  const result = await db.query(`SELECT * FROM users2 WHERE id = '${userId}'`);
  const user = result.rows[0];
  console.log(user);

  return (
    <div>
      <h1>{user.username}</h1>
      <div>
        <h3>username: {user.username}</h3>
        <p>user email: {user.email}</p>
        <p>user bio: {user.bio}</p>
        <p>user location: {user.location}</p>
        <ShowUserPosts userId={user.id} />
      </div>
    </div>
  );
}
