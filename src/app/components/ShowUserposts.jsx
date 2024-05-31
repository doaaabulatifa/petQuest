import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export default async function ShowUserPosts({ userId }) {
  // Get the clerk userId
  const {userId}  = auth();

  // Fetch posts for the logged-in user
  const result = await db.query(
    `SELECT * FROM pets WHERE user_id = $1;`,
    [userId]
  );

  const userPosts = result.rows;


  return (
    <div>
    <h2>User Posts:</h2>
    {userPosts.length > 0 ? (
      userPosts.map((post) => (
        <div key={post.id}>
          <p>{post.location}</p>
        </div>
      ))
    ) : (
      <p>No posts found for this user.</p>
    )}
  </div>
);
}