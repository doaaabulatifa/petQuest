import Link from "next/link";


export default function Headers(){
    return (
        <>
         <header>

 
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