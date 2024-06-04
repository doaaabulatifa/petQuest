import { db } from "@/lib/db";

export default async function ShowComment({ postId }) {
  const result = await db.query(`SELECT
  users2.username,
  comments.content
FROM
  comments
JOIN
  users2 ON comments.user_id = users2.id
  WHERE comments.pet_id = ${postId};`);

  const comments = result.rows;

  return (
    <div>
      <h4 className="text-xl font-medium">Comments</h4>
      {comments.map((commentt) => (
        <div
          className="flex flex-col items-center padding-y padding-x border"
          key={commentt.id}
        >
          <p>{commentt.username}:</p>
          <p>{commentt.content}</p>
        </div>
      ))}
    </div>
  );
}
