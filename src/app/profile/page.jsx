import { db } from "@/lib/db";
import Link from "next/link";

export default async function Profiles() {
  "use server";
  const result = await db.query(`SELECT * FROM users`);
  const profiles = result.rows;

  return (
    <div>
      <h1>users</h1>
      <div>
        {profiles.map((profile, index) => (
          <div key={index}>
            <p>Click on my name to visit my profile:</p>
            <Link href={`/profile/${profile.id}`} key={profile.id}>
              <div>
                <h3>{profile.username}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
