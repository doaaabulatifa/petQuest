// import ShowUserPosts from "../../components/ShowUserposts";
import { db } from "@/lib/db";

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
  console.log(user);

  return (
    <div className="flex-center flex-col text-center margintop">
      <h1>{user.username}</h1>
      <div>
        <h3>username: {user.username}</h3>
        <p>email: {user.email}</p>
        <p>bio: {user.bio}</p>
        <p>location: {user.location}</p>
        {/* <ShowUserPosts userId={user.id} /> */}
      </div>
    </div>
  );
}
