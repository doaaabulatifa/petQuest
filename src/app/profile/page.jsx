import { db } from "@/lib/db";
import Link from "next/link";

export default async function Profiles() {
  "use server";
  const result = await db.query(`SELECT * FROM users2`);
  const profiles = result.rows;

  console.log(profiles);

  return (
    <div className="flex flex-col items-center margintop">
      <h1 className="text-xl font-medium">User Profiles</h1>
      <h2 className="padding-y">Click on a profile to visit their profile!</h2>
      <div className="flex padding-y">
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
    </div>
  );
}
