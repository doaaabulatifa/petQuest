
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";


export default async function Addcomment({postId}) {

    async function handleAddComment(formData) {
      "use server";
  
      // const user_name = formData.get("user_name");
      const { userId } = auth();
      console.log({userId})
    
      const result= await db.query(`SELECT * FROM users WHERE clerk_id = '${userId}'`);
      
      console.log(result)
      console.log("iddddddddd")
      console.log(result.rows[0].id);
      const profileId = result.rows[0].id;

      console.log(profileId);
    
      const content= formData.get("content");
      await db.query(`INSERT INTO comments (content, user_id,pet_id,created_at) values ('${content}', '${profileId}', '${postId}',${created_at})`);

  
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

        <button type="submit">Add a comment!</button>
      </form>
 
    )
    
} 