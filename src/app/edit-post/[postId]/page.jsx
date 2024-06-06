// src/app/edit-post/[postId]/page.js (or your server component file)

import { getAuth } from "@clerk/nextjs/server";
import EditPost from "@/components/EditPost";

export default async function EditPostPage({ params }) {
  const { postId } = params;
  const { userId } = getAuth();

  return <EditPost userId={userId} postId={postId} />;
}
