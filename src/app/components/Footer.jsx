import Link from "next/link";
import Image from "next/image";
import PetQuestIconSmall from "../../../public/PetQuestIconSmall.png";

export default function Headers() {
  return (
    <div className="w-screen absolute left-0 border-t-black border-t-2">
      <div className="flex items-center justify-around pt-6">
        <Link className="min-w-40 flex justify-center" href="/">
          <Image src={PetQuestIconSmall} height={100} width={100} />
        </Link>

        <div className="flex flex-col items-center min-w-40">
          <Link href="/about">About</Link>
          <Link href="#">Contact</Link>
          <Link href="#"> Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
        <div className="flex flex-col items-center min-w-40">
          <p>Socials</p>
          <div className="flex mt-2">
            <Link className="mx-2" href="#">
              <Image src={PetQuestIconSmall} width={30} height={30} />
            </Link>
            <Link className="mx-2" href="#">
              <Image src={PetQuestIconSmall} width={30} height={30} />
            </Link>
            <Link className="mx-2" href="#">
              <Image src={PetQuestIconSmall} width={30} height={30} />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <p className="text-center p-3">Developed by </p>
        {/* target="_blank" opens Link in new tab */}
        <Link href="/" target="_blank">
          P
        </Link>
        <p>&nbsp;/&nbsp;</p>
        <Link href="/" target="_blank">
          H
        </Link>
        <p>&nbsp;/&nbsp;</p>
        <Link href="https://github.com/doaaabulatifa" target="_blank">
          D
        </Link>
        <p>&nbsp;/&nbsp;</p>
        <Link href="https://github.com/splendidist" target="_blank">
          L
        </Link>
      </div>
    </div>
  );
}
