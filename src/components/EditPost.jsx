import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
// import Pets from "@/app/pets/page";
import Breeds from "@/components/Breeds";
import Cities from "@/components/Cities";
import Link from "next/link";

export default function EditPost({postId}) {
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


    await db.query(
      `UPDATE pets SET user_id='${profileId}', name='${name}', species='${species}', breed='${breed}', age='${age}' ,location='${location}',description='${description}',image_url='${image_url}',status='${status}',created_at='${created_at}',updated_at='${updated_at}' WHERE id='${postId}'`
    );
    revalidatePath("/");
  }

  return (
    <div>
      <h2 className="p-3 text-white text-xl text-center">Edit your Post</h2>
      <form
        className="bg-red-200 rounded-md p-2 flex flex-col items-end"
        action={handleEditPost}
      >
           <div className="margintop flex flex-col items-center">
      
       <fieldset>
        <label className="py-2" htmlFor="name">
          Name
        </label>
        <input
          className="input border rounded-lg border-black p-2"
          name="name"
          type="text"
          placeholder="Pet's Name"
        />
        </fieldset>
        <fieldset>
        <label className="py-2" htmlFor="species">
          Species
        </label>
        {/* <Pets /> */}
        </fieldset>
        <fieldset>
        <label className="py-2" htmlFor="breed" name="breed">
          Breed
        </label>
       
        <Breeds />
        </fieldset>
        <fieldset>
        <label className="py-2" htmlFor="age">
          Age (Years)
        </label>
        <input
          className="input border rounded-lg border-black p-2"
          name="age"
          type="number"
          placeholder="Age"
        />
        </fieldset>
        <fieldset>
        <label className="py-2" htmlFor="location">
          Location
        </label>
        <Cities />
        </fieldset>
        <fieldset>
        <label className="py-2" htmlFor="description">
          Description
        </label>
        <textarea
          className="textarea"
          name="description"
          type="text"
          placeholder="Tell us about your pet!"
        />
        </fieldset>
        <fieldset>
        <label className="py-2" htmlFor="image">
          Add Image
        </label>
        <input
          className="input border rounded-lg border-black p-2"
          name="image"
          type="file"
          accept="image/*"
        />
        </fieldset>
        <fieldset>
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
        </fieldset>
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