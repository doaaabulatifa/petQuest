
import { SignedIn } from "@clerk/nextjs";
import MyProfileContent from "../../components/MyProfileContent";

export default function myProfile() {
  return (
    <SignedIn>
      <MyProfileContent />
    </SignedIn>
  );
}
 