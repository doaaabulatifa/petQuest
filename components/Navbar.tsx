import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

const NavBar = () => (
  <header className="w-full sm:fixed z-10 -top-0 -left-0">
    <nav className="mx-auto flex flex-col justify-between items-center sm:px-16 px-6 py-4 bg-transparent sm:flex-row">
      <Link href="/" className="flex justify-center items-center">
        <Image
          src="/petquestlogo.png"
          alt="logo"
          width={118}
          height={18}
          className="object-contain"
        />
      </Link>
      <Header />
      <SignedOut>
        <div className="border bg-white border-blue-600 rounded-full py-1 px-5 my-2 sm:py-3 sm:px-10 text-blue-600">
          <SignInButton />
        </div>
      </SignedOut>
      <SignedIn>
        <div className="w-28 flex justify-center">
          <UserButton />
        </div>
      </SignedIn>
    </nav>
  </header>
);

export default NavBar;
