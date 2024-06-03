export default function AddPostForm() {
    const imageFile = event.target.files[0]
    const { data, error } = await supabase.storage
      .from('imagess')
      .upload('{image}.png', imageFile)
    
  return (
    <div>
      <form className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input name="name" type="text" placeholder="Pet's Name" />
        <label htmlFor="species">Species</label>
        <input name="species" type="text" />
        <label htmlFor="breed">Breed</label>
        <input name="breed" type="text" />
        <label htmlFor="age">Age</label>
        <input name="age" type="text" />
        <label htmlFor="description">Description</label>
        <input
          name="description"
          type="text"
          placeholder="Tell us about your pet!"
        />
        <label htmlFor="image">Add Image</label>
        <input name="image" type="file" accept="image/*" />
        <label htmlFor="status">Status</label>
        <input name="status" type="text" />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}
