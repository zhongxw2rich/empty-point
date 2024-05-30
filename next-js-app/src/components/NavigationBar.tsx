"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
export default function NavigationBar() {
  const { status } = useSession();
  return (
    status === "authenticated" ? (
      <div className="flex pb-4 border-b mb-4">
        <div className="flex items-center mr-16"><Link className="btn" href={"/"}>Home</Link></div>
        <div className="flex items-center mr-16"><Link className="btn" href={"/about"}>About</Link></div>
        <div className="flex items-center  mr-16"><Link className="btn" href={"/data"}>Data</Link></div>
        <div className="flex items-center mr-16"><Link className="btn" href={"/user"}>User</Link></div>
        <button className="btn items-center ml-auto" onClick={() => signOut({ callbackUrl: "/sign-in" })}>Sign Out</button>
      </div>
    ) : (
      <div className="flex pb-4 border-b mb-4">
        <div className="flex items-center mr-16"><Link className="btn" href={"/"}>Home</Link></div>
        <div className="flex items-center mr-16"><Link className="btn" href={"/about"}>About</Link></div>
        <div className="flex items-center  mr-16"><Link className="btn" href={"/data"}>Data</Link></div>
        <div className="flex items-center mr-16"><Link className="btn" href={"/user"}>User</Link></div>
        <div className="flex items-center ml-auto"><Link className="btn" href={"/sign-in"}>Sign In</Link></div>
      </div>
    )
  );
}