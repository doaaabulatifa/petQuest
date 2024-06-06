
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";


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
   
    await db.query(
        "UPDATE users2 SET username = $1, email = $2, bio = $3, location = $4  WHERE clerk_id = $5",
        [username, email, bio, location,userId]
      );
    revalidatePath("/");
  
    redirect("/");
  }

  return (
    <div className="margintop flex flex-col items-center">
      <form
      className="border paddingform flex flex-col items-center"
       action={editProfile}>
        <label className="py-2">Name</label>
        <input
          name="username"
          placeholder="your Name"
          defaultValue={profile.username}
        />
        <input
        className="input border rounded-lg border-black p-2"
          name="email"
          placeholder="your email"
          defaultValue={profile.email}
         
        />
        <input
        className="input border rounded-lg border-black p-2"
          name="location"
          placeholder="your location"
          defaultValue={profile.location}
        />
      

        <label className="py-2">bio</label>
        <textarea
          name="bio"
          placeholder="bio"
          rows={5}
          defaultValue={profile.bio}
        ></textarea>
      
      
       

        <button 
        className="smallmargintop text-lg text-blue font-semibold px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b from-gray-900 to-black hover:from-indigo-500 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >Submit Changes</button>
      </form>
    </div>
  );
}