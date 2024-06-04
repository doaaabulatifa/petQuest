"use client";

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AdoptionForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const petId = searchParams.get('petId');

  async function handleAdoptionRequest(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const status = formData.get("status");
    const message = formData.get("message");

    try {
      const response = await fetch('/api/adopt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ petId, message, status }),
      });

      if (response.ok) {
        router.push('/pets');
      } else {
        const errorData = await response.json();
        console.error('Failed to submit adoption request:', errorData);
        router.push('/error', { state: { error: errorData.error } });
      }
    } catch (error) {
      console.error('An error occurred:', error);
      router.push('/error', { state: { error: 'An unexpected error occurred' } });
    }
  }

  return (
    <div>
      <form className="flex flex-col items-center" onSubmit={handleAdoptionRequest}>
        <p className="text-xl font-medium py-2">Adoption Request</p>
        <label className="py-2" htmlFor="message">Your message:</label>
        <textarea
          className="w-1/5 h-60 resize-none border-2 border-black p-1"
          name="message"
          placeholder="Provide us with your details and inquiries"
        />
        <label className="py-2" htmlFor="status">Status</label>
        <select className="w-1/12 border-2 border-black p-1" name="status">
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
        </select>
        <button className="m-4 w-1/12 border-2 border-black p-1" type="submit">Submit</button>
      </form>
    </div>
  );
}

