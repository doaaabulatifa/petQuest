export default function AddPostForm() {
  return (
    <div>
      <form className="flex flex-col items-center">
        <p className="text-xl font-medium py-2">Make a post</p>
        <label className="py-2" htmlFor="name">
          Name
        </label>
        <input
          className="w-1/12 border-2 border-black p-1"
          name="name"
          type="text"
          placeholder="Pet's Name"
        />
        <label className="py-2" htmlFor="species">
          Species
        </label>
        <select className="w-1/12 border-2 border-black p-1" name="species">
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
          <option value="other">Other</option>
        </select>
        <label className="py-2" htmlFor="breed">
          Breed
        </label>
        <select className="w-1/12 border-2 border-black p-1" name="breed">
          <option value="">option 1</option>
          <option value="">option 2</option>
          <option value="">option 3</option>
          <option value="">option 4</option>
        </select>
        <label className="py-2" htmlFor="age">
          Age
        </label>
        <select className="w-1/12 border-2 border-black p-1" name="age">
          <option value="">option 1</option>
          <option value="">option 2</option>
          <option value="">option 3</option>
          <option value="">option 4</option>
        </select>
        <label className="py-2" htmlFor="description">
          Description
        </label>
        <textarea
          className="w-1/5 h-60 resize-none border-2 border-black p-1"
          name="description"
          type="text"
          placeholder="Tell us about your pet!"
        />
        <label className="py-2" htmlFor="image">
          Add Image
        </label>
        <input
          className="w-1/6 border-2 border-black p-1"
          name="image"
          type="file"
          accept="image/*"
        />
        <label className="py-2" htmlFor="status">
          Status
        </label>
        <select className="w-1/12 border-2 border-black p-1" name="status">
          <option value="">option 1</option>
          <option value="">option 2</option>
          <option value="">option 3</option>
          <option value="">option 4</option>
        </select>
        <button className="m-4 w-1/12 border-2 border-black p-1" type="submit">
          Add Post
        </button>
      </form>
    </div>
  );
}
