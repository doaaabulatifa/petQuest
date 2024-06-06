"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ErrorPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  useEffect(() => {
    if (router.query?.state?.error) {
      setError(router.query.state.error);
    } else {
      setError("An unexpected error occurred.");
    }
  }, [router]);

  return (
    <div className="margintop padding-x">
      <div className="flex flex-col smallmargintop items-center">
        <h1 className="smallmargintop">Error</h1>
        <p>{error}</p>
        <button
          onClick={() => router.back()}
          className="smallmargintop border bg-white border-blue-600 rounded-full py-1 px-5 sm:py-3 sm:px-10 text-blue-600"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
