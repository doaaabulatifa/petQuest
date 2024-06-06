"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AdoptionForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const petId = searchParams.get("petId");

  async function handleAdoptionRequest(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const status = formData.get("status");
    const message = formData.get("message");

    try {
      const response = await fetch("/api/adopt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ petId, message, status }),
      });

      if (response.ok) {
        router.push("/pets");
      } else {
        const errorData = await response.json();
        console.error("Failed to submit adoption request:", errorData);
        router.push("/error", { state: { error: errorData.error } });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      router.push("/error", {
        state: { error: "An unexpected error occurred" },
      });
    }
  }

  return (
    <div>
      <form
        className="flex flex-col items-center"
        onSubmit={handleAdoptionRequest}
      >
        <p className="text-xl font-medium py-2">Adoption Request</p>
        <label className="py-2" htmlFor="message">
          Your message:
        </label>
        <textarea
          className="textarea"
          name="message"
          placeholder="Provide us with your details and enquiries"
        />

        <button className="smallmargintop text-lg text-blue font-semibold px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b from-gray-900 to-black hover:from-indigo-500 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
          Submit
        </button>
      </form>
    </div>
  );
}
