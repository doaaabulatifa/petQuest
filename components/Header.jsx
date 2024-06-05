import Link from "next/link";

export default function Headers() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <Link
              className="border bg-white border-blue-600 rounded-full m-5 py-2 px-8 text-blue-600"
              href="/"
            >
              Home
            </Link>
            <Link
              className="border bg-white border-blue-600 rounded-full m-5 py-2 px-8 text-blue-600"
              href="/profile"
            >
              Contributors 
            </Link>
            <Link
              className="border bg-white border-blue-600 rounded-full m-5 py-2 px-8 text-blue-600"
              href="/pets"
            >
              Pets
            </Link>
            <Link
              className="border bg-white border-blue-600 rounded-full m-5 py-2 px-8 text-blue-600"
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
