import { db } from "@/lib/db";
import ShowUserPosts from "@/components/ShowUserPosts";
import Link from "next/link";
import { notFound } from "next/navigation";

// Metadata
export async function generateMetadata({ params }) {
  const userId = params.id;

  // Validate userId
  if (isNaN(Number(userId))) {
    notFound();
  }

  const result = await db.query("SELECT * FROM users2 WHERE id = $1", [userId]);
  const user = result.rows[0];

  if (!user) {
    notFound();
  }

  return {
    title: `petQuest | ${user.username}`,
    description: `${user.bio}`,
  };
}

// Component
export default async function User({ params }) {
  const userId = params.id;

  // Validate userId
  if (isNaN(Number(userId))) {
    notFound();
  }

  const result = await db.query("SELECT * FROM users2 WHERE id = $1", [userId]);
  const user = result.rows[0];

  if (!user) {
    notFound();
  }

  return (
    <div className="flex items-center flex-col text-center margintop">
      <h1 className="text-xl font-medium ">{user.username}'s Profile</h1>
      <div className="smallmargintop items-center flex flex-col sm:flex-row padding-x padding-y border">
        <img
          src={user.profile_picture}
          alt={user.username}
          className="userimage sm:rounded-lg"
        />
        <div className="flex flex-col petinfo">
          <h3>Username: {user.username}</h3>
          <p>Location: {user.location}</p>
          <p>Contact: {user.email}</p>
          <p>Bio: {user.bio}</p>
        </div>
      </div>

      <Link
        className="smallmargintop text-lg text-blue font-semibold px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b from-gray-900 to-black hover:from-indigo-500 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
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
