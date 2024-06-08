"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function NavigationBar() {

  return (
    <nav className="bg-zinc-100 dark:bg-opacity-50 light:bg-opacity-50 text-black p-4 flex justify-between items-center">
        <div>
          <img src="/logo-trans.png" alt="" style={{width:'32px',height:'32px'}}/>
        </div>
        <div className="flex navbar">
            <div className=""><Link className="btn" href={"/"}>Home</Link></div>
            <div className=""><Link className="btn" href={"/about"}>About</Link></div>
            <div className=""><Link className="btn" href={"/blog"}>Blog</Link></div>
            <div className=""><Link className="btn" href={"/chat"}>Chat</Link></div>
            <div className=""><Link className="btn" href={"/data"}>Data</Link></div>
            <div className=""><Link className="btn" href={"/user"}>User</Link></div>
        </div>
        <SignBnt />
      </nav>
  );
}

export function SignBnt() {
  const { status } = useSession();
  return status === "authenticated" ? 
    <button className="" onClick={() => signOut({ callbackUrl: "/sign-in" })}>Sign Out</button> :
    <div className="flex sign-in"><Link className="btn" href={"/sign-in"}>Sign In</Link></div> ;
}