import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function POST(req) {
  const { userId } = auth();

  if (!userId) {
    return new Response(JSON.stringify({ error: "User not authenticated" }), { status: 401 });
  }

  const { petId, firstName, lastName, email, address, telephone, ageOfYoungestChild, detailsOfOtherPets, areOtherPetsNeutered, hasSecureOutdoorArea, whereWillAnimalSleep, willAnimalBeLeftAlone, otherDetails, previousConvictions, termsAndConditions } = await req.json();

  try {
    const idResult = await db.query(`SELECT id FROM users2 WHERE clerk_id = $1`, [userId]);
    const profileId = idResult.rows[0]?.id;

    if (!profileId) {
      return new Response(JSON.stringify({ error: "User profile not found" }), { status: 404 });
    }

    const created_at = new Date().toISOString();

    await db.query(
      `INSERT INTO adoption_requests (user_id, pet_id, first_name, last_name, email, address, telephone, age_of_youngest_child, details_of_other_pets, are_other_pets_neutered, has_secure_outdoor_area, where_will_animal_sleep, will_animal_be_left_alone, other_details, previous_convictions, terms_and_conditions, created_at) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)`,
      [profileId, petId, firstName, lastName, email, address, telephone, ageOfYoungestChild, detailsOfOtherPets, areOtherPetsNeutered, hasSecureOutdoorArea, whereWillAnimalSleep, willAnimalBeLeftAlone, otherDetails, previousConvictions, termsAndConditions, created_at]
    );

    return new Response(JSON.stringify({ message: "Adoption request submitted successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error submitting adoption request:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}
