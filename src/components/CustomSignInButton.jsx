import { SignInButton } from "@clerk/nextjs";

const CustomSignInButton = () => {
  return (
    <div>


    <SignInButton>
    <button className="smallmargintop text-2xl font-bold px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b from-gray-900 to-black hover:from-indigo-500 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
        <span className="relative z-10">Sign In</span>
      </button>
    </SignInButton>
    </div>
  );
};

export default CustomSignInButton;
