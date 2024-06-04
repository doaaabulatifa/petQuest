import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export default async function AddComment({ postId }) {
  async function handleAddComment(formData) {
    "use server";
    const { userId } = auth();

    const idtst = await db.query(
      `SELECT id FROM users2 WHERE clerk_id = '${userId}'`
    );
    const profileId = idtst.rows[0].id;
    const content = formData.get("content");

    const createdAt = new Date().toISOString();
    await db.query(
      `INSERT INTO comments (content, user_id,pet_id,created_at) values ('${content}', '${profileId}', '${postId}','${createdAt}')`
    );

    revalidatePath("/pets");
    redirect("/pets");
  }

  return (
    <form className="flex flex-col smallmargintop" action={handleAddComment}>
      {/* <label htmlFor="user_name">Your name</label> */}
      {/* <input name="user_name" id="user_name" placeholder="Name" /> */}
      <input type="hidden" name="post_id" value={postId} />
      <label htmlFor="content">Leave a comment!</label>
      <textarea
        className="border"
        name="content"
        id="content"
        placeholder="content"
      />
      <button type="submit">Add comment!</button>
    </form>
  );
}
