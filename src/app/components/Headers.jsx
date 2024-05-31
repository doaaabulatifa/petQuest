import Link from "next/link";
import Image from "next/image";
import PetQuestIcon from "../../../public/PetQuestIcon.png"
export default function Headers(){
    return (
        <>
         <header>
   
     <Image src ={PetQuestIcon} height={150} width={150}/>
        <nav >

              <ul >
        <Link  href="/">Home</Link>
        <Link   href="/profile">Profile</Link>
        <Link  href="/pets">Pet Post</Link>
        <Link  href="/about">About</Link>
        
      
        </ul>
        </nav>
   
        </header>
        </>
    )
}