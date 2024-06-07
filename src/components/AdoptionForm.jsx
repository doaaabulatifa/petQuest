"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AdoptionForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const petId = searchParams.get("petId");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    telephone: "",
    ageOfYoungestChild: "",
    detailsOfOtherPets: "",
    areOtherPetsNeutered: "",
    hasSecureOutdoorArea: "",
    whereWillAnimalSleep: "",
    willAnimalBeLeftAlone: "",
    otherDetails: "",
    hasPreviousConvictions: false,
    agreeToTerms: false,
  });

  async function handleAdoptionRequest(event) {
    event.preventDefault();

    try {
      const response = await fetch("/api/adopt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ petId, ...formData }),
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto">
  <form className="flex flex-col items-center" onSubmit={handleAdoptionRequest}>
    <p className="text-xl font-medium py-2">Adoption Request</p>

        {/* First Name */}
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">First Name:</label>
        <input className="appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        {/* Last Name */}
        <label className="block text-gray-700 text-sm font-bold mb-2 py-2" htmlFor="lastName">Last Name:</label>
        <input className="appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        {/* Email */}
        <label className="block text-gray-700 text-sm font-bold mb-2 py-2" htmlFor="email">Email:</label>
        <input className="appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Address */}
        <label className="block text-gray-700 text-sm font-bold mb-2 py-2"  htmlFor="address">Address:</label>
        <input className="appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        {/* Telephone */}
        <label className="block text-gray-700 text-sm font-bold mb-2 py-2"  htmlFor="telephone">Telephone:</label>
        <input className="appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="tel"
          id="telephone"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          required
        />

        {/* Age of youngest child */}
        <label className="block text-gray-700 text-sm font-bold mb-2 py-2"  htmlFor="ageOfYoungestChild">Age of youngest child:</label>
        <input className="appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="ageOfYoungestChild"
          name="ageOfYoungestChild"
          value={formData.ageOfYoungestChild}
          onChange={handleChange}
        />

        {/* Details of other pets in household */}
        <label className="block text-gray-700 text-sm font-bold mb-2 py-2"  htmlFor="detailsOfOtherPets">Details of other pets:</label>
        <textarea className="appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="detailsOfOtherPets"
          name="detailsOfOtherPets"
          value={formData.detailsOfOtherPets}
          onChange={handleChange}
        ></textarea>

        {/* Are other pets neutered? */}
        <label className="block text-gray-700 text-sm font-bold mb-2 py-2"  htmlFor="areOtherPetsNeutered">Are other pets neutered?</label>
        <select className="appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="areOtherPetsNeutered"
          name="areOtherPetsNeutered"
          value={formData.areOtherPetsNeutered}
          onChange={handleChange}
        >
          <option value="">Select...</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {/* Do you have a secure outdoor area? */}
        <label className="block text-gray-700 text-sm font-bold mb-2 py-2"  htmlFor="hasSecureOutdoorArea">Do you have a secure outdoor area?</label>
        <select className="appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="hasSecureOutdoorArea"
          name="hasSecureOutdoorArea"
          value={formData.hasSecureOutdoorArea}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {/* Where will the animal sleep at night? */}
        <label className="block text-gray-700 text-sm font-bold mb-2 py-2"  htmlFor="whereWillAnimalSleep">Where will the animal sleep at night?</label>
        <textarea className="appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="whereWillAnimalSleep"
          name="whereWillAnimalSleep"
          value={formData.whereWillAnimalSleep}
          onChange={handleChange}
        ></textarea>

        {/* Will the animal be left alone for long periods of time? */}
        <label className="block text-gray-700 text-sm font-bold mb-2 py-2"  htmlFor="willAnimalBeLeftAlone">Will the animal be left alone for long periods of time?</label>
        <select className="appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="willAnimalBeLeftAlone"
          name="willAnimalBeLeftAlone"
          value={formData.willAnimalBeLeftAlone}
          onChange={handleChange}
        >
          <option value="">Select...</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {/* Any other details to support your application? */}
        <label className="block text-gray-700 text-sm font-bold mb-2 py-2"  htmlFor="otherDetails">Any other details to support your application?</label>
        <textarea className="appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="otherDetails"
          name="otherDetails"
          value={formData.otherDetails}
          onChange={handleChange}
        ></textarea>

        {/* Does anyone in the house have previous convictions for animal cruelty or been banned from keeping animals for any period of time? */}
        <label className="block text-gray-700 text-sm font-bold mb-2 py-2"  htmlFor="hasPreviousConvictions">Does anyone in the house have previous convictions for animal cruelty or been banned from keeping animals for any period of time?</label>
        <input 
          type="checkbox"
          id="hasPreviousConvictions"
          name="hasPreviousConvictions"
          checked={formData.hasPreviousConvictions}
          onChange={handleChange}
        />

        {/* Terms & Conditions */}
        <label className="block text-gray-700 text-sm font-bold mb-2 py-2" >
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            required
          />
          I/We have read and agree to the Adoption Terms & Conditions as laid down by the charity 
          <a href="#">[here]</a> and agree that if adoption is a success, I will do my best to give my rescue animal the happily ever after he/she deserves
        </label>

        <button
          className="smallmargintop text-lg text-blue font-semibold px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b from-gray-900 to-black hover:from-indigo-500 hover:to-blue-700 transition duration-300 ease-in-out transform hover
          shadow-lg"
          type="submit"
          >
          Submit
          </button>
          </form>
          </div>
          );
          }
