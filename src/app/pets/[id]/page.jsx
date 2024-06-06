import { db } from "@/lib/db";
import AddComment from "@/components/AddComment";
import ShowComment from "@/components/ShowComment";
import Petinfo from "@/components/Petinfo";
import EditPost from "@/components/EditPost";
import { auth } from "@clerk/nextjs/server";
import { SignedIn } from "@clerk/nextjs";

//metadata
export async function generateMetadata({ params }) {
  const petId = params.id;
  const result = await db.query(`SELECT * FROM pets WHERE id = '${petId}'`);
  const pet = result.rows[0];
  return {
    title: `petQuest | ${pet.name}`,
    description: `${pet.description}`,
  };
}

//edf
export default async function pet({ params }) {
  const petId = params.id;
  const result = await db.query(`SELECT * FROM pets WHERE id = '${petId}'`);
  const pet = result.rows[0];

  if (!pet) {
    return <div>Pet not found</div>;
  }

  //Allow current signed in user to see EditPost on their own posts only
  const { userId } = auth();
  const myResult = await db.query(
    `SELECT * FROM users2 WHERE clerk_id = '${userId}'`
  );
  const profileId = myResult.rows[0] ? myResult.rows[0].id : null;
  const currentUser = profileId == pet.user_id ? true : false;

  return (
    <div className="w-screen margintop flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="flex sm:padding-x padding-y">
          <Petinfo pet={pet} />
        </div>
        {currentUser && <EditPost postId={pet.id} />}
        <SignedIn>
          <AddComment postId={pet.id} />
        </SignedIn>
        <ShowComment postId={pet.id} />
      </div>
    </div>
  );
}
