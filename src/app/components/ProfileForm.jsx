import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default function ProfileForm() {
  const { userId } = auth();

  async function handleUpdateProfile(formData) {
    "use server";

    const username = formData.get("username");
    const email = formData.get("email");
    const location = formData.get("location");
    const bio = formData.get("bio");

    await db.query(
      `UPDATE users2 SET username='${username}', email='${email}', location='${location}', bio='${bio}' WHERE clerk_id='${userId}'`
    );
    revalidatePath("/");
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="p-3 text-white text-xl text-center">
        Create your Profile
      </h2>
      <form
        className="bg-blue-200 rounded-md p-2 flex flex-col items-end"
        action={handleUpdateProfile}
      >
        <fieldset className="mb-2">
          <label className="p-3" htmlFor="username">
            Username
          </label>
          <input
            className="w-48 p-1"
            name="username"
            placeholder="username"
            required
          />
        </fieldset>
        <fieldset className="mb-2">
          <label className="p-3" htmlFor="email">
            Email
          </label>
          <input
            className="w-48 p-1"
            name="email"
            placeholder="Email"
            required
          />
        </fieldset>
        <fieldset className="mb-2">
          <label className="p-3" htmlFor="location">
            Location
          </label>
          <input
            className="w-48 p-1"
            name="location"
            placeholder="Location"
            required
          />
        </fieldset>
        <fieldset className="mb-2">
          <label className="p-3" htmlFor="bio">
            Bio
          </label>
          <input className="w-48 p-1" name="bio" placeholder="Bio" required />
        </fieldset>
        <button
          className="self-center uppercase px-3 py-1 m-2 rounded-full bg-red-100 cursor-pointer hover:bg-white hover:scale-110 active:scale-100"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
}
