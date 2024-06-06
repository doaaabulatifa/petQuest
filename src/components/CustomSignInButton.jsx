import { SignInButton } from "@clerk/nextjs";

const CustomSignInButton = () => {
  return (
    <SignInButton>
      <button className="border bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3 px-10 transition duration-300">
        Sign In
      </button>
    </SignInButton>
  );
};

export default CustomSignInButton;
