import { db } from "@/lib/db";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import CustomSignInButton from "../../components/CustomSignInButton";

export default async function Profiles() {
  "use server";
  const result = await db.query(`SELECT * FROM users2`);
  const profiles = result.rows;

  return (
    <div className="flex flex-col items-center margintop">
      <SignedIn>
        <h1 className="text-xl font-medium">User Profiles</h1>
        <h2 className="padding-y">Click on a profile to visit their profile!</h2>
        <div className="flex flex-wrap justify-center padding-y">
          {profiles.map((profile, index) => (
            <div className="usercontainer padding-y" key={index}>
              <Link href={`/profile/${profile.id}`} key={profile.id}>
                <div className="flex flex-col items-center justify-between border rounded-lg padding-y">
                  <img
                    src={profile.profile_picture}
                    alt={profile.username}
                    className="userimage rounded-lg"
                  />
                  <h3 className="padding-y">{profile.username}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </SignedIn>

      <SignedOut>
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl font-medium">Please sign in to view the profiles.</p>
         <CustomSignInButton />
        </div>
      </SignedOut>
    </div>
  );
}
