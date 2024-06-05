import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import Cities from "@/components/Cities";
import Pets from "@/components/Pets";
import Breeds from "@/components/Breeds";

export default function AddPostForm() {
  async function handleAddPost(formData) {
    "use server";

    const { userId } = auth();

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

    await db.query(
      `INSERT INTO pets (name,species,breed,age,location,description,image_url,status, user_id,created_at,updated_at) values ('${name}', '${species}','${breed}','${age}','${location}','${description}','${image_url}','${status}', '${profileId}','${created_at}','${updated_at}')`
    );

    revalidatePath("/");

    redirect("/");
  }
  return (
    <div className="margintop flex flex-col items-center">
      <form
        className="border paddingform flex flex-col items-center"
        action={handleAddPost}
      >
        <p className="text-xl font-medium py-2">Make a new post</p>
        <label className="py-2" htmlFor="name">
          Name
        </label>
        <input
          className="input border rounded-lg border-black p-2"
          name="name"
          type="text"
          placeholder="Pet's Name"
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
        >
          <option value="available">Avaliable</option>
          <option value="processing">Processing</option>
          <option value="adopted">Adopted</option>
        </select>
        <button
          className="smallmargintop border bg-white border-blue-600 rounded-full py-3 px-10 text-blue-600"
          type="submit"
        >
          Add Post
        </button>
      </form>
      <Link
        className="smallmargintop border bg-white border-blue-600 rounded-full py-3 px-10 text-blue-600"
        href="/pets"
      >
        Return to Pets
      </Link>
    </div>
  );
}
