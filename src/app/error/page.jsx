
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
      <button onClick={() => router.back()} className="smallmargintop text-lg text-blue font-semibold px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b from-gray-900 to-black hover:from-indigo-500 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">Go Back</button>
    </div>
  );
}
