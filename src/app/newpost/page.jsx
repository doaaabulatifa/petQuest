import AddPostForm from "../../components/AddPostForm";
import FileUpload from "@/components/FileUpload";

export default function NewPost() {
  return (
    <div>
      <FileUpload />
      <AddPostForm />
    </div>
  );
}
