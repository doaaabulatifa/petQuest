
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export default function AddPostForm() {
  async function handleAddPost(formData) {
    "use server";
    const { userId } = auth();
    console.log({userId})
  
    const idtst= await db.query(`SELECT id FROM users2 WHERE clerk_id = '${userId}'`);
    

    console.log(idtst)
    console.log("iddddddddd")

    const profileId = idtst.rows[0].id;

    console.log(profileId);
  
    const name= formData.get("name");
    const species= formData.get("species");
    const breed= formData.get("breed");
    const age = parseInt(formData.get("age"));
    const location= formData.get("location");
    const description= formData.get("description");
    const image_url= formData.get("image_url");
    const status= formData.get("status");
    const created_at = new Date().toISOString();
    
    const updated_at = new Date().toISOString();
    await db.query(`INSERT INTO pets (name,species,breed,age,location,description,image_url,status, user_id,created_at,updated_at) values ('${name}', '${species}','${breed}','${age}','${location}','${description}','${image_url}','${status}', '${profileId}','${created_at}','${updated_at}')`);


    revalidatePath("/");

    redirect("/");}
  return (
    <div>
      <form className="flex flex-col items-center" action={handleAddPost}>
      {/* <input type="hidden" name="user_id" value={profileId} /> */}
        <p className="text-xl font-medium py-2">Make a post</p>
        <label className="py-2" htmlFor="name">
          Name
        </label>
        <input
          className="w-1/12 border-2 border-black p-1"
          name="name"
          type="text"
          placeholder="Pet's Name"
        />
        <label className="py-2" htmlFor="species">
          Species
        </label>
        <select className="w-1/12 border-2 border-black p-1" name="species">
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
          <option value="other">Other</option>
        </select>
        <label className="py-2" htmlFor="breed" name="breed">
          Breed
        </label>
        <select className="w-1/12 border-2 border-black p-1" name="breed">
          <option value="">option 1</option>
          <option value="">option 2</option>
          <option value="">option 3</option>
          <option value="">option 4</option>
        </select>
        <label className="py-2" htmlFor="age">
          Age
        </label>
        <label className="py-2" htmlFor="age">
          Age
        </label>
        <input
          className="w-1/12 border-2 border-black p-1"
          name="age"
          type="number"
          placeholder="Age"
        />
      
        <label className="py-2" htmlFor="location">
          Age
        </label>
        <select className="w-1/12 border-2 border-black p-1">
          <option value="">norwich</option>
          <option value="">Birmigham</option>
          <option value="">hull</option>
          <option value="">London</option>
        </select>
        <label className="py-2" htmlFor="description">
          Description
        </label>
        <textarea
          className="w-1/5 h-60 resize-none border-2 border-black p-1"
          name="description"
          type="text"
          placeholder="Tell us about your pet!"
        />
        <label className="py-2" htmlFor="image">
          Add Image
        </label>
        <input
          className="w-1/6 border-2 border-black p-1"
          name="image"
          type="file"
          accept="image/*"
        />
        <label className="py-2" htmlFor="status">
          Status
        </label>
        <select className="w-1/12 border-2 border-black p-1" name="status">
          <option value="">avaliable</option>
          <option value="">adopted</option>
        
        </select>
        <button className="m-4 w-1/12 border-2 border-black p-1" type="submit">
          Add Post
        </button>
      </form>
    </div>
  );
}
