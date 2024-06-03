
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";


export default async function Addcomment({postId},{userId}) {

    async function handleAddComment(formData) {
      "use server";
  
      // const user_name = formData.get("user_name");
      // const { userId } = auth();
      console.log({userId})
    
      const idtst= await db.query(`SELECT id FROM users2 WHERE clerk_id = '${userId}'`);
      
      // console.log("id is"+result)
      console.log(idtst)
      console.log("iddddddddd")
 
      const profileId = idtst.rows[0].id;

      console.log(profileId);
    
      const content= formData.get("content");
      const createdAt = new Date().toISOString();
      await db.query(`INSERT INTO comments (content, user_id,pet_id,created_at) values ('${content}', '${profileId}', '${postId}','${createdAt}')`);

  
      revalidatePath("/pets");
  
      redirect("/pets");
    }
  
    return (
  
        <form action={handleAddComment}>
       {/* <label htmlFor="user_name">Your name</label> */}
        {/* <input name="user_name" id="user_name" placeholder="Name" /> */}
        <input type="hidden" name="post_id" value={postId} />
        <label htmlFor="content">content</label>
        <textarea name="content" id="content" placeholder="content" />
        {/* <h6>created_at: {new Date(created_at).toLocaleString()}</h6> */}

        <button type="submit">Add a comment!</button>
      </form>
 
    )
    
} 