import React from "react";
import Image from "next/image";
import BahaniLogo from "@/public/images/bahani.png";
import { FaHeart } from "react-icons/fa";
function Footer() {
  return (
    <footer className="grid grid-cols-6 border-t px-6 md:px-52 py-10">
      <div className=" col-span-3 flex flex-col justify-center">
        <div className="mb-1">
          <Image src={BahaniLogo} alt="bahani" height={80} />
        </div>
        <p className="text-zinc-400 text-sm text-balance">
          Bulkit is built for developers and designers. It&#39;s modular
          approach lets you create an original landing page for your brand.
        </p>
        <p className="text-zinc-400 text-sm text-balance whitespace-pre flex flex-row items-center my-6 ">
          Coded with love
          <span className="px-2">
            <FaHeart className="text-red-600 w-3 h-3" />
          </span>
          by BAHANI BILLEL.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
