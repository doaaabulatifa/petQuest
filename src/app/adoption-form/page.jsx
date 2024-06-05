"use client";

import AdoptionForm from "../../components/AdoptionForm";
import { useSearchParams } from "next/navigation";

export default function AdoptionFormPage() {
  const searchParams = useSearchParams();
  const petId = searchParams.get("petId");

  if (!petId) {
    return <div>Invalid pet ID. Please go back and select a pet.</div>;
  }

  return (
    <div className="margintop padding-x">
      <AdoptionForm petId={petId} />
    </div>
  );
}
