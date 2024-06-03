import Link from "next/link";
import Image from "next/image";

import { ClerkProvider, useClerk, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import CustomButton from "./CustomButton";

const NavBar = () => {
  const { openSignIn } = useClerk();

  return (
    <ClerkProvider>
      <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
          <Link href='/' className='flex justify-center items-center'>
            <Image
              src='/logo.svg'
              alt='logo'
              width={118}
              height={18}
              className='object-contain'
            />
          </Link>

          <SignedOut>
            <CustomButton
              title='Sign in'
              btnType='button'
              containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
              onClick={openSignIn}
            />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>
      </header>
    </ClerkProvider>
  );
};

export default NavBar;
