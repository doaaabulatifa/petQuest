import "./globals.css";

import { Footer, NavBar } from "../../components";

export const metadata = {
  title: "PetQuest",
  description: "Amazing Pets waiting to be rehomed. Look through and adopt!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
