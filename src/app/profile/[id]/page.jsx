import { db } from "@/lib/db";
import ShowUserPosts from "@/components/ShowUserPosts";
import Link from "next/link";

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

   
      
        

    <div className="flex items-center flex-col text-center margintop">
      <h1 className="text-xl font-medium ">{user.username}'s Profile</h1>
      <div className="smallmargintop flex padding-x padding-y border">
        <img
          src={user.profile_picture}
          alt={user.username}
          className="userimage rounded-lg"
        />
        <div className="flex flex-col petinfo">
          <h3>Username: {user.username}</h3>
          <p>Location: {user.location}</p>
          <p>Contact: {user.email}</p>
          <p>Bio: {user.bio}</p>
        </div>

      </div>
    
      <Link
        className="smallmargintop border bg-white border-blue-600 rounded-full py-3 px-10 text-blue-600"
        href="/profile"
      >
        Back to profiles
      </Link>
      <h2 className="smallmargintop text-xl font-medium">
        {user.username}'s Posts:
      </h2>
      <ShowUserPosts userId={user.id} />
    </div>
  );
}
