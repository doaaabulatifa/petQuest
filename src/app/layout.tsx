import "./globals.css";
import { Footer, NavBar } from "../../components";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "PetQuest",
  description: "Amazing Pets waiting to be rehomed. Look through and adopt!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="relative">
          <NavBar />
          {children}

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
