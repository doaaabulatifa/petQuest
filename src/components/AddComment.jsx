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

    revalidatePath("/");
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
        className="smallmargintop text-lg text-blue font-semibold px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b from-gray-900 to-black hover:from-indigo-500 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        type="submit"
      >
        Add comment
      </button>
    </form>
  );
}
