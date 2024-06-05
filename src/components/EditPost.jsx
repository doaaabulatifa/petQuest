import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import Pets from "@/components/Pets";
import Breeds from "@/components/Breeds";
import Cities from "@/components/Cities";
import Link from "next/link";

export default function EditPost({ postId }) {
  const { userId } = auth();

  async function handleEditPost(formData) {
    "use server";

    const idtst = await db.query(
      `SELECT id FROM users2 WHERE clerk_id = '${userId}'`
    );
    console.log(idtst);
    const profileId = idtst.rows[0].id;

    const name = formData.get("name");
    const species = formData.get("species");
    const breed = formData.get("breed");
    const age = parseInt(formData.get("age"));
    const location = formData.get("location");
    const description = formData.get("description");
    const image_url = formData.get("image_url");
    const status = formData.get("status");
    const created_at = new Date().toISOString();
    const updated_at = new Date().toISOString();

    const defaultImg =
      "https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg";

    const imageUrlToInsert = image_url || defaultImg;

    await db.query(
      `UPDATE pets SET user_id='${profileId}', name='${name}', species='${species}', breed='${breed}', age='${age}' ,location='${location}',description='${description}',image_url='${imageUrlToInsert}',status='${status}',created_at='${created_at}',updated_at='${updated_at}' WHERE id='${postId}'`
    );
    revalidatePath("/");
  }

  return (
    <div>
      <form
        className="bg-red-200 rounded-md p-2 flex flex-col items-end"
        action={handleEditPost}
      >
        <div className="smallmargintop flex flex-col items-center">
          <p className="text-xl font-medium py-2">Edit post</p>
          <label className="py-2" htmlFor="name">
            Name
          </label>
          <input
            className="input border rounded-lg border-black p-2"
            name="name"
            type="text"
            placeholder="Pet's Name"
            required
          />

          <label className="py-2" htmlFor="species">
            Species
          </label>
          <Pets />

          <label className="py-2" htmlFor="breed" name="breed">
            Breed
          </label>

          <Breeds />

          <label className="py-2" htmlFor="age">
            Age (Years)
          </label>
          <input
            className="input border rounded-lg border-black p-2"
            name="age"
            type="number"
            placeholder="Age"
            required
          />

          <label className="py-2" htmlFor="location">
            Location
          </label>
          <Cities />

          <label className="py-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="textarea"
            name="description"
            type="text"
            placeholder="Tell us about your pet!"
            required
          />

          <label className="py-2" htmlFor="image">
            Add Image
          </label>
          <input
            className="input border rounded-lg border-black p-2"
            name="image"
            type="file"
            accept="image/*"
          />

          <label className="py-2" htmlFor="status">
            Status
          </label>
          <select
            className="input border rounded-lg border-black p-2"
            name="status"
            required
          >
            <option value="available">Avaliable</option>
            <option value="processing">Processing</option>
            <option value="adopted">Unavailable</option>
          </select>

          <button
            className="smallmargintop border bg-white border-blue-600 rounded-full py-3 px-10 text-blue-600"
            type="submit"
          >
            Update
          </button>

          <Link
            className="smallmargintop border bg-white border-blue-600 rounded-full py-3 px-10 text-blue-600"
            href="/profile"
          >
            Return to profiles
          </Link>
        </div>
      </form>
    </div>
  );
}
