import "./globals.css";
import { Footer, NavBar } from "../../components";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import ProfileForm from "@/components/ProfileForm";
import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export const metadata = {
  title: "PetQuest",
  description: "Amazing Pets waiting to be rehomed. Look through and adopt!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //Clerk user id
  const { userId } = auth();

  //Clerk info for user
  const user = await currentUser();

  //SELECT profile for user
  const result = await db.query(
    `SELECT * FROM users2 WHERE clerk_id = '${userId}'`
  );

  //UPDATE profile pic if user exists
  if (userId && result.rows[0].profile_picture == null)
    await db.query(
      `UPDATE users2 SET profile_picture = '${user?.imageUrl}' WHERE clerk_id = '${userId}'`
    );

  //INSERT new user if user doesn't exist
  if (result.rowCount === 0 && userId !== null) {
    await db.query(`INSERT INTO users2 (clerk_id) VALUES ('${userId}')`);
  }

  //If user, show page, else show form
  const hasUsername = result.rows[0]?.username != null ? true : false;

  return (
    <ClerkProvider>
      <html lang="en">
        <body className="relative">
          <NavBar />
          <SignedOut>{children}</SignedOut>
          <SignedIn>
            {hasUsername && children}
            {!hasUsername && <ProfileForm />}
          </SignedIn>

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
