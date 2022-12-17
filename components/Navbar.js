import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-red-500">
      <div
        className="font-bold text-neutral-100 p-4
      max-w-7xl mx-auto container tracking-widest
      "
      >
        <Link href="/">
          <p className="text-base md:text-2xl">
            Watch<span className="text-white/40">Me</span>
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
