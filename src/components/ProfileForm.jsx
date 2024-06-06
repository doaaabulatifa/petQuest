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
    revalidatePath("/profile");
  }

  return (
    <div className=" margintop flex flex-col items-center">
      <h2 className="text-xl font-medium">Create your Profile</h2>
      <form className="flex flex-col items-center" action={handleUpdateProfile}>
        <label className="padding-y" htmlFor="username">
          Username
        </label>
        <input
          className="border rounded-lg p-2"
          name="username"
          placeholder="username"
          required
        />

        <label className="padding-y" htmlFor="email">
          Email
        </label>
        <input
          className="border rounded-lg p-2"
          name="email"
          placeholder="Email"
          required
        />

        <label className="padding-y" htmlFor="location">
          Location
        </label>
        <input
          className="border rounded-lg p-2"
          name="location"
          placeholder="Location"
          required
        />

        <label className="padding-y" htmlFor="bio">
          Bio
        </label>
        <input
          className="border rounded-lg p-2"
          name="bio"
          placeholder="Bio"
          required
        />

        <button
          className="smallmargintop border bg-white border-blue-600 rounded-full py-3 px-10 text-blue-600"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
}
