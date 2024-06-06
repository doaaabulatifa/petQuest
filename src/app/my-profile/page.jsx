
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
// import BasicSelect from "../componant/BaiscSelect";

export default async function myProfile() {
    const { userId } = auth();
    console.log({userId});
    const result = await db.query("SELECT * FROM users2 WHERE clerk_id = $1", [userId]);
 
  
  const profile = result.rows[0]; 

  async function editProfile(formData) {
    "use server";
    const username = formData.get("username");
    const email= formData.get("email");
    const bio= formData.get("bio");
    const location= formData.get("location");
    const profile_picture= formData.get("profile_picture");
    await db.query(
        "UPDATE users2 SET username = $1, email = $2, bio = $3, location = $4, profile_picture = $5 WHERE clerk_id = $5",
        [username, email, bio, location,profile_picture]
      );
    revalidatePath("/");
  
    redirect("/");
  }

  return (
    <div>
      <form action={editProfile}>
        <label>Name</label>
        <input
          name="username"
          placeholder="your Name"
          defaultValue={profile.username}
        />
        <input
          name="email"
          placeholder="your email"
          defaultValue={profile.email}
         
        />
        <input
          name="location"
          placeholder="your location"
          defaultValue={profile.location}
        />
        {/* <BasicSelect /> */}

        <label>bio</label>
        <textarea
          name="bio"
          placeholder="bio"
          rows={5}
          defaultValue={profile.bio}
        ></textarea>
      
      
          <label className="py-2" htmlFor="profile_picture">
          Add Image
        </label>
        <input
          className="input border rounded-lg border-black p-2"
          name="profile_picture"
          type="file"
          accept="image/*"
        />

        <button>Submit Changes</button>
      </form>
    </div>
  );
}