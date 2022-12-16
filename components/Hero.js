import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center bg-white pb-10">
      <div className="text-center">
        <div className="w-60 mx-auto">
          {/* Image should have width, height, and alt, otherwise it's error */}
          <Image src={"/netflix.png"} width={200} height={200} alt="icon" />
        </div>
        <h1 className="text-2xl text-red-500 font-bold mb-3">Welcome to WatchMe</h1>

        {/* Link should have href, otherwise it's error */}
        <Link href="/contact">
          <button className="uppercase border border-red-500 rounded-sm text-red-500 px-3 py-1 hover:bg-red-500 hover:text-white">contact us</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
