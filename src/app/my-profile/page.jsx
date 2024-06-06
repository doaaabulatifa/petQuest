import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import CustomSignInButton from "../../components/CustomSignInButton";
import { redirect } from "next/navigation";

export default async function myProfile() {
  const { userId } = auth();
  const result = await db.query("SELECT * FROM users2 WHERE clerk_id = $1", [
    userId,
  ]);
  const profile = result.rows[0];

  async function editProfile(formData) {
    "use server";
    const username = formData.get("username");
    const email = formData.get("email");
    const bio = formData.get("bio");
    const location = formData.get("location");

    await db.query(
      "UPDATE users2 SET username = $1, email = $2, bio = $3, location = $4 WHERE clerk_id = $5",
      [username, email, bio, location, userId]
    );
    revalidatePath("/profile");
    redirect("/profile");
  }

  return (
    <>
      <SignedIn>
        <div className="margintop flex flex-col items-center">
          <form
            className="border paddingform flex flex-col items-center"
            action={editProfile}
          >
            <label className="py-2">Name</label>
            <input
              name="username"
              placeholder="Your Name"
              defaultValue={profile?.username || ""}
              className="input border rounded-lg border-black p-2"
            />
            <label className="py-2">Email</label>
            <input
              name="email"
              placeholder="Your Email"
              defaultValue={profile?.email || ""}
              className="input border rounded-lg border-black p-2"
            />
            <label className="py-2">Location</label>
            <input
              name="location"
              placeholder="Your Location"
              defaultValue={profile?.location || ""}
              className="input border rounded-lg border-black p-2"
            />
            <label className="py-2">Bio</label>
            <textarea
              name="bio"
              placeholder="Bio"
              rows={5}
              defaultValue={profile?.bio || ""}
              className="textarea input border rounded-lg border-black p-2"
            ></textarea>
            <button className="smallmargintop text-lg text-blue font-semibold px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b from-gray-900 to-black hover:from-indigo-500 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              Submit Changes
            </button>
          </form>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="margintop flex flex-col items-center">
          <p className="text-lg">Please sign in to edit your profile.</p>
          <CustomSignInButton />
        </div>
      </SignedOut>
    </>
  );
}
