"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function NavigationBar() {
  const { status } = useSession();
  return (
    status === "authenticated" ? (
      <nav className="bg-zinc-200 dark:bg-opacity-50 light:bg-opacity-50 text-black p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Logo</div>
        <div className="flex space-x-4 navbar">
            <div><Link className="btn" href={"/"}>Home</Link></div>
            <div><Link className="btn" href={"/about"}>About</Link></div>
            <div><Link className="btn" href={"/data"}>Data</Link></div>
            <div><Link className="btn" href={"/chat"}>Chat</Link></div>
            <div><Link className="btn" href={"/user"}>User</Link></div>
        </div>
        <button className="" onClick={() => signOut({ callbackUrl: "/sign-in" })}>Sign Out</button>
      </nav>
    ) : (
      <nav className="bg-zinc-100 dark:bg-opacity-50 light:bg-opacity-50 text-black p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Logo</div>
        <div className="flex space-x-4 navbar">
            <div className=""><Link className="btn" href={"/"}>Home</Link></div>
            <div className=""><Link className="btn" href={"/about"}>About</Link></div>
            <div className=""><Link className="btn" href={"/data"}>Data</Link></div>
            <div className=""><Link className="btn" href={"/chat"}>Chat</Link></div>
            <div className=""><Link className="btn" href={"/user"}>User</Link></div>
        </div>
        <div className=""><Link className="btn" href={"/sign-in"}>Sign In</Link></div>
      </nav>
    )
  );
}