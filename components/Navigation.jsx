import React from "react";
import Image from "next/image";
import Logo from "../public/images/logo.png";
import WomanPorfile from "../public/images/womanprofile.jpg";
import { IoMdMenu } from "react-icons/io";

import { CiHeart, CiShoppingCart, CiMenuBurger } from "react-icons/ci";

function Navigation() {
  return (
    <div
      className="grid grid-cols-4 md:grid-cols-3 justify-between items-center px-4 md:px-28 py-2  
   bg-white "
    >
      <div className="col-span-2 flex flex-row items-center">
        <div className="">
          <Image
            src={Logo}
            alt="logo"
            width={180}
            className=" left-0 -top-1/2"
          />
        </div>
        <div className="mx-5 block">
          <IoMdMenu className="w-8 h-8 text-gray-500" />
        </div>
        <ul className=" hidden md:flex flex-row justify-center space-x-8">
          <li>Home</li>
          <li>Shop</li>
          <li>Categories</li>
        </ul>
      </div>
      <ul className="col-span-2 md:col-span-1 flex flex-row justify-end items-center space-x-8">
        <li>
          <CiShoppingCart className="h-6 w-6" />
        </li>
        <li>
          <CiHeart className="h-6 w-6" />
        </li>
        <li className=" overflow-hidden">
          <Image
            src={WomanPorfile}
            alt="logo"
            height={40}
            width={40}
            className="rounded-full"
          />
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
