import Link from "next/link";
import Image from "next/image";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

const NavBar = () => (
  <header className="w-full fixed z-10 -top-0 -left-0">
    <nav className=" mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
      <Link href="/" className="flex justify-center items-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width={118}
          height={18}
          className="object-contain"
        />
      </Link>
      <SignedOut>
        <SignInButton className="border bg-white border-blue-600 rounded-full py-3 px-10 text-blue-600" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  </header>
);

export default NavBar;
