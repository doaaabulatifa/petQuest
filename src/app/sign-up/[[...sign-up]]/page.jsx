import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center margintop item-center">
      <SignUp />
    </div>
  );
}
