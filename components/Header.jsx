import Link from "next/link";

export default function Headers() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <Link
              className="border bg-white border-blue-600 rounded-full  text-blue-600 m-1 py-1 px-2 sm:m-5 sm:py-2 sm:px-8"
              href="/"
            >
              Home
            </Link>
            <Link
              className="border bg-white border-blue-600 rounded-full text-blue-600 m-1 py-1 px-2 sm:m-5 sm:py-2 sm:px-8"
              href="/profile"
            >
              Contributors
            </Link>
            <Link
              className="border bg-white border-blue-600 rounded-full text-blue-600 m-1 py-1 px-2 sm:m-5 sm:py-2 sm:px-8"
              href="/pets"
            >
              Pets
            </Link>
            <Link
              className="border bg-white border-blue-600 rounded-full text-blue-600 m-1 py-1 px-2  sm:m-5 sm:py-2 sm:px-8"
              href="/about"
            >
              About
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
