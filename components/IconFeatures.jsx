import React from "react";
import { BiSolidHeartCircle } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { BsShieldLock } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

function IconFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2  px-6 md:px-52 my-32  gap-16 place-items-center ">
      {/* Heart */}
      <div
        className=" rounded-full 
       flex items-center justify-center flex-col relative group col-span-1  "
      >
        <FaHeart
          className="text-5xl text-white w-16 h-16 bg-red-600 rounded-full p-4
         outline group-hover:outline-offset-4 mb-1 ease-in-out duration-100 transition-all cursor-pointer outline-red-600  "
        />
        <div className="flex flex-col text-center px-16 ">
          <p className="text-red-600 font-semibold text-sm">Cute & Lovely</p>
          <p className="text-xs text-zinc-700">
            Lorem ipsum dolor sit amet, usu no ancillae verterem partiendo, mea
            ea.
          </p>
        </div>
      </div>
      {/* Bell */}
      <div
        className=" rounded-full 
       flex items-center justify-center flex-col relative group  "
      >
        <FaBell
          className="text-5xl text-white w-16 h-16 bg-cyan-600 rounded-full p-4  
        outline group-hover:outline-offset-4 mb-1 ease-in-out duration-100 transition-all cursor-pointer outline-cyan-600"
        />
        <div className="flex flex-col text-center px-16">
          <p className="text-cyan-600 font-semibold text-sm">Cute & Lovely</p>
          <p className="text-xs text-zinc-700">
            Lorem ipsum dolor sit amet, usu no ancillae verterem partiendo, mea
            ea.
          </p>
        </div>
      </div>
      {/* Birhday cake */}
      <div
        className=" rounded-full 
       flex items-center justify-center flex-col relative group  "
      >
        <FaBirthdayCake
          className="text-5xl text-white w-16 h-16 bg-fuchsia-600 rounded-full p-4 
        outline group-hover:outline-offset-4 mb-1 ease-in-out duration-100 transition-all cursor-pointer outline-fuchsia-600"
        />
        <div className="flex flex-col text-center px-16">
          <p className="text-fuchsia-600 font-semibold text-sm">
            Cute & Lovely
          </p>
          <p className="text-xs text-zinc-700">
            Lorem ipsum dolor sit amet, usu no ancillae verterem partiendo, mea
            ea.
          </p>
        </div>
      </div>
      {/* Truck */}
      <div
        className=" rounded-full 
       flex items-center justify-center flex-col  relative group  "
      >
        <CiDeliveryTruck
          className="text-5xl text-white w-16 h-16 bg-amber-600 rounded-full p-4 
        outline group-hover:outline-offset-4 mb-1 ease-in-out duration-100 transition-all cursor-pointer outline-amber-600 "
        />
        <div className="flex flex-col text-center px-16">
          <p className="text-amber-600 font-semibold text-sm">Cute & Lovely</p>
          <p className="text-xs text-zinc-700">
            Lorem ipsum dolor sit amet, usu no ancillae verterem partiendo, mea
            ea.
          </p>
        </div>
      </div>
      {/* Phone */}
      <div
        className=" rounded-full 
       flex items-center justify-center flex-col relative group  "
      >
        <FaPhoneAlt
          className="text-5xl text-white w-16 h-16 bg-indigo-600 rounded-full p-4 
        outline group-hover:outline-offset-4 mb-1 ease-in-out duration-100 transition-all cursor-pointer outline-indigo-600 "
        />
        <div className="flex flex-col text-center px-16">
          <p className="text-indigo-600 font-semibold text-sm">Cute & Lovely</p>
          <p className="text-xs text-zinc-700">
            Lorem ipsum dolor sit amet, usu no ancillae verterem partiendo, mea
            ea.
          </p>
        </div>
      </div>
      {/* Shield */}
      <div
        className=" rounded-full 
       flex items-center justify-center flex-col relative group  "
      >
        <BsShieldLock
          className="text-xl text-white w-16 h-16 bg-teal-600 rounded-full p-4
        outline group-hover:outline-offset-4 mb-1 ease-in-out duration-100 transition-all cursor-pointer outline-teal-600 "
        />
        <div className="flex flex-col text-center px-16">
          <p className="text-teal-600 font-semibold text-sm">Cute & Lovely</p>
          <p className="text-xs text-zinc-700">
            Lorem ipsum dolor sit amet, usu no ancillae verterem partiendo, mea
            ea.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IconFeatures;
