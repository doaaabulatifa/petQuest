import { db } from "@/lib/db";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
// import { auth } from "@clerk/nextjs/server";
// import Comment from "../componant/comment/Comment";
// import ShowComment from "../componant/showcomments/page";
import Link from "next/link";
// import LikeButton from "../componant/likeButton/page";

// import styles from "./Posts.module.css";

export default async function Pets() {
  // get the clerk userId
  const { userId } = auth();

  // get my new posts
//   CREATE TABLE Pets (
//     id SERIAL PRIMARY KEY,
//     user_id INT REFERENCES Users(id) ON DELETE CASCADE,
//     name VARCHAR(255) NOT NULL,
//     species VARCHAR(255) NOT NULL,
//     breed VARCHAR(255),
//     age INT NOT NULL,
//     location VARCHAR(255) NOT NULL,
//     description TEXT NOT NULL,
//     image_url VARCHAR(255),
//     status text DEFAULT 'available',
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );
  const posts = await db.query(`SELECT
                pets.id,
                pets.name,
                species,
                pets.created_at,
                pets.user_id,
                users.username
            FROM pets
            INNER JOIN users ON pets.user_id = users.id;`);

  // server action to add a new post
  async function handleAddPost(formData) {
    "use server";
    // get information from the form
    const name = formData.get("name");
    const species = formData.get("species");
    const breed = formData.get("breed");
    const age = formData.get("age");
    const location  = formData.get("location ");
    const description= formData.get("description");
   
    const  image_url= formData.get(" image_url");

    // get the profile id from the database
    const result = await db.query(
      `SELECT id FROM users WHERE clerk_id = '${userId}'`
    );
    const userId = result.rows[0].id;

    // add the new post to the database
    await db.query(
      `INSERT INTO pets (user_id,name,species,breed,age,location,description) VALUES (${userId}, '${name}','${species}','${breed}','${age}','${location}','${description}','${image_url}}')`
    );
    
  }

  return (
    <div>
      <h2>Pets</h2>
      <SignedIn>
    
        <form action={handleAddPost}>
        <label>Name</label>
        <input
          name="name"
          placeholder="your Name"
          // defaultValue={profile.user_name}
        />
          <button>Submit</button>
        </form>
      </SignedIn>

      <SignedOut>
        <p>Please sign in to share your story</p>
        <SignInButton />
      </SignedOut>
  

      <h3>Community Secrets</h3>
      <div className={styles.postsContainer}> {/* Apply CSS class */}
        {posts.rows.map((post) => {
          return (
            <div key={post.id} className={styles.post}> {/* Apply CSS class */}
              <h3>The Secret of our Stranger :  <span><Link href={`/strangers/${post.profile_id}`} >{post.user_name}</Link> </span> </h3>
              <span  className={styles.time}>{new Date(post.created_at).toLocaleString()}</span>
              <h2  className={styles.comment}>{post.content}</h2>
              {/* <LikeButton postId={post.id} /> */}
              <Comment postId={post.id} />
              <ShowComment postId={post.id}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}