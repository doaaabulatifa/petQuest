
import { SignInButton } from "@clerk/nextjs";

const CustomSignInButton = () => {
  return (
    <SignInButton>
      <button className="border bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold rounded-full py-3 px-20 shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
        <span className="relative z-10">Sign In</span>
      </button>
    </SignInButton>
  );
};

export default CustomSignInButton;

