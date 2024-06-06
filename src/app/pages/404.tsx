import Link from "next/link";
export default function Custom404() {
    return (
      <div className="flex flex-col items-center margintop">
        <h1 className="text-2xl font-medium">404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link href="/">
          <a className="mt-4 text-blue-600">Go back home</a>
        </Link>
      </div>
    );
  }
  