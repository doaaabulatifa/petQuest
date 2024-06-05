
import { db } from "@/lib/db";

export async function getPetData(petId) {
  const result = await db.query('SELECT * FROM pets WHERE id = $1', [petId]);
  const pet = result.rows[0];
  return pet;
}
