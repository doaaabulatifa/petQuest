import Link from "next/link";

export default function Headers() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <Link className="padding-x hover:underline" href="/">
              Home
            </Link>
            <Link className="padding-x hover:underline" href="/profile">
              Profiles
            </Link>
            <Link className="padding-x hover:underline" href="/pets">
              Pets
            </Link>
            <Link className="padding-x hover:underline" href="/about">
              About
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
