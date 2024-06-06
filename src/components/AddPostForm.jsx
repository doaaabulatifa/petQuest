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
      `INSERT INTO pets (name,species,breed,age,location,description,image_url,status, user_id,created_at,updated_at) values ('${name}', '${species}','${breed}','${age}','${location}','${description}','${imageUrlToInsert}','${status}', '${profileId}','${created_at}','${updated_at}')`
    );

    revalidatePath("/pets");

    redirect("/pets");
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
          <option value="adopted">Adopted</option>
        </select>
        <button
          className="smallmargintop text-lg text-blue font-semibold px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b from-gray-900 to-black hover:from-indigo-500 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          type="submit"
        >
          Add Post
        </button>
      </form>
      <Link
        className="smallmargintop text-lg text-blue font-semibold px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b from-gray-900 to-black hover:from-indigo-500 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        href="/profile"
      >
        Return to profiles
      </Link>
    </div>
  );
}
