import Link from "next/link";
import React from "react";

function Header() {
  return (
    <section
      className="flex items-center justify-between px-5 text-2xl font-light tracking-tight"
      id="header"
    >
      <div className="flex gap-16">
        <Link href="/work">work</Link>
        <Link href="/information">information</Link>
        <Link href="/contact">contact</Link>
        <Link href="">resume</Link>
      </div>
      <div>
        <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
        <Link href="/" className="font-bold text-3xl">puneet bajaj</Link> 
        </div>
      </div>
    </section>
  );
}

export default Header;
