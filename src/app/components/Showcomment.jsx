
import { db } from "@/lib/db";


export default async function ShowComment({ postId }) {


  const result = await db.query(`SELECT
  users2.username,
  comments.content
FROM
  comments
JOIN
  users2 ON comments.user_id = users2.id
  WHERE comments.pet_id = ${postId};`);
    
  const comments = result.rows;
  console.log(comments)
  
  return (
        <div >
            <h4>comments:</h4>
           
       
              {comments.map((commentt) => (
        <div key={commentt.id}>
      {/* <p>{comment.id}</p> */}
      {/* <h2>{comment.user_name}</h2> */}
      <p>{commentt.username}</p>
      <p>{commentt.content}</p>
  
    </div>
         ))}
         </div>
 
   

  );
}