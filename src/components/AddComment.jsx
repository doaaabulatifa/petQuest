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
    <form
      className="formcontainer flex flex-col items-center smallmargintop"
      action={handleAddComment}
    >
      <input type="hidden" name="post_id" value={postId} />
      <label className="text-xl font-medium" htmlFor="content">
        Post a comment
      </label>
      <textarea
        className="smallmargintop textareamobile sm:textarea"
        name="content"
        id="content"
        placeholder="comment"
      />
      <button
        className=" smallmargintop border bg-white border-blue-600 rounded-full py-3 px-10 text-blue-600"
        type="submit"
      >
        Add comment
      </button>
    </form>
  );
}
