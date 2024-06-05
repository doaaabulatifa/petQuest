import { getPetData } from "@/lib/data";
import Petinfo from "@/components/Petinfo";
import AddComment from "@/components/AddComment";
import ShowComment from "@/components/ShowComment";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const pet = await getPetData(params.id);
  return {
    title: `petQuest | ${pet.name}`,
    description: `${pet.description}`,
  };
}

export default async function Page({ params }) {
  const pet = await getPetData(params.id);
  const petId = pet.id;

  if (!pet) {
    return <div>Pet not found</div>;
  }

  return (
    <div className="w-screen mt-12 flex justify-center">
      <div className="flex flex-col items-center max-w-4xl w-full px-4">
        <h1 className="text-3xl font-semibold mb-4">Meet {pet.name}</h1>
        <div className="w-full bg-white rounded-lg shadow-md p-6 mb-6">
          <Petinfo pet={pet} />
        </div>
        <div className="w-full bg-white rounded-lg shadow-md p-6 mb-6">
          <AddComment postId={pet.id} />
        </div>
        <div className="w-full bg-white rounded-lg shadow-md p-6">
          <ShowComment postId={pet.id} />
        </div>
      </div>
    </div>
  );
}
