"use server"


import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function handleEditPost(postId, formData) {
  const { userId } = auth();
  const idtst = await db.query(
    `SELECT id FROM users2 WHERE clerk_id = '${userId}'`
  );

  const profileId = idtst.rows[0].id;

  const name = formData.get("name");
  const species = formData.get("species");
  const breed = formData.get("breed");
  const age = parseInt(formData.get("age"));
  const location = formData.get("location");
  const description = formData.get("description");
  const image_url = formData.get("image_url");
  const status = formData.get("status");
  const created_at = new Date().toISOString();
  const updated_at = new Date().toISOString();

  const defaultImg =
    "https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg";

  const imageUrlToInsert = image_url || defaultImg;

  await db.query(
    `UPDATE pets SET user_id='${profileId}', name='${name}', species='${species}', breed='${breed}', age='${age}' ,location='${location}',description='${description}',image_url='${imageUrlToInsert}',status='${status}',created_at='${created_at}',updated_at='${updated_at}' WHERE id='${postId}'`
  );

  revalidatePath(`/pets/${postId}`);
  redirect(`/pets/${postId}`);
  



}
