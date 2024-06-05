
"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function ErrorPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  useEffect(() => {
    if (router.query?.state?.error) {
      setError(router.query.state.error);
    } else {
      setError('An unexpected error occurred.');
    }
  }, [router]);

  return (
    <div className="margintop padding-x">
      <h1 className="flex justify-center">Error</h1>
      <p>{error}</p>
      <button onClick={() => router.back()} className="m-4 w-1/12 border-2 border-black p-1">Go Back</button>
    </div>
  );
}
