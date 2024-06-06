"use client";
import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pets from "@/components/Pets";
import Breeds from "@/components/Breeds";
import Cities from "@/components/Cities";
import { handleEditPost } from "@/lib/action";

export default function EditPost({ postId }) {
  const formRef = useRef(null);

  const [formState, setFormState] = useState({
    name: "",
    species: "",
    breed: "",
    age: "",
    location: "",
    description: "",
    image_url: "",
    status: "available",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await handleEditPost(postId, formData);

    // Show success message as a toast notification
    toast.success("Post has been updated successfully!");

    // Reset the form state
    setFormState({
      name: "",
      species: "",
      breed: "",
      age: "",
      location: "",
      description: "",
      image_url: "",
      status: "available",
    });
  };

  return (
    <div>
      <ToastContainer className="Toastify__toast-container--center" />
      <form
        className="bg-red-200 rounded-md p-2 flex flex-col items-end"
        onSubmit={handleSubmit}
      >
        <div className="smallmargintop flex flex-col items-center">
          <p className="text-xl font-medium py-2">Edit post</p>
          <label className="py-2" htmlFor="name">
            Name
          </label>
          <input
            className="input border rounded-lg border-black p-2"
            name="name"
            type="text"
            placeholder="Pet's Name"
            required
            value={formState.name}
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
          />

          <label className="py-2" htmlFor="species">
            Species
          </label>
          <Pets
            value={formState.species}
            onChange={(e) =>
              setFormState({ ...formState, species: e.target.value })
            }
          />

          <label className="py-2" htmlFor="breed" name="breed">
            Breed
          </label>
          <Breeds
            value={formState.breed}
            onChange={(e) =>
              setFormState({ ...formState, breed: e.target.value })
            }
          />

          <label className="py-2" htmlFor="age">
            Age (Years)
          </label>
          <input
            className="input border rounded-lg border-black p-2"
            name="age"
            type="number"
            placeholder="Age"
            required
            value={formState.age}
            onChange={(e) =>
              setFormState({ ...formState, age: e.target.value })
            }
          />

          <label className="py-2" htmlFor="location">
            Location
          </label>
          <Cities
            value={formState.location}
            onChange={(e) =>
              setFormState({ ...formState, location: e.target.value })
            }
          />

          <label className="py-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="textarea"
            name="description"
            type="text"
            placeholder="Tell us about your pet!"
            required
            value={formState.description}
            onChange={(e) =>
              setFormState({ ...formState, description: e.target.value })
            }
          />

          <label className="py-2" htmlFor="image">
            Add Image
          </label>
          <input
            className="input border rounded-lg border-black p-2"
            name="image"
            type="file"
            accept="image/*"
            value={formState.image_url}
            onChange={(e) =>
              setFormState({ ...formState, image_url: e.target.value })
            }
          />

          <label className="py-2" htmlFor="status">
            Status
          </label>
          <select
            className="input border rounded-lg border-black p-2"
            name="status"
            required
            value={formState.status}
            onChange={(e) =>
              setFormState({ ...formState, status: e.target.value })
            }
          >
            <option value="available">Available</option>
            <option value="processing">Processing</option>
            <option value="adopted">Unavailable</option>
          </select>

          <button
           className="smallmargintop text-lg text-blue font-semibold px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b from-gray-900 to-black hover:from-indigo-500 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
