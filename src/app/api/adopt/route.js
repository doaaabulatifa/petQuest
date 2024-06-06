import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function POST(req) {
  const { userId } = auth();

  if (!userId) {
    return new Response(JSON.stringify({ error: "User not authenticated" }), { status: 401 });
  }

  const { petId, message, status } = await req.json();

  try {
    const idResult = await db.query(`SELECT id FROM users2 WHERE clerk_id = $1`, [userId]);
    const profileId = idResult.rows[0]?.id;

    if (!profileId) {
      return new Response(JSON.stringify({ error: "User profile not found" }), { status: 404 });
    }

    const created_at = new Date().toISOString();

    await db.query(
      `INSERT INTO Adoption_Requests (pet_id, message, status, user_id, created_at) 
       VALUES ($1, $2, $3, $4, $5)`,
      [petId, message, status, profileId, created_at]
    );

    return new Response(JSON.stringify({ message: "Adoption request submitted successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error submitting adoption request:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}
