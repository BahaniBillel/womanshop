import React from "react";
import Image from "next/image";
import Women from "@/public/images/women.png";

function JoinThePack() {
  return (
    <div className="flex flex-col my-32 place-items-center px-6 md:px-52 ">
      <div className=" md:w-2/4 flex flex-col space-y-4 place-items-center">
        <h3 className="text-5xl md:text-6xl font-bold text-zinc-900">
          Join The Pack
        </h3>
        <p className="text-zinc-900 text-center px-4">
          Beats&#39; first on-ear headphones with active noise cancellation. The
          Solo Pros analyze ambient noise with their built-in microphones and
          cancel out the clamor of city streets and the low rumble of a subway
          or plane.
        </p>
        <div className="flex flex-row space-x-5 my-3">
          <p className="px-6 py-2 bg-indigo-400 text-white rounded-sm text-sm font-light cursor-pointer">
            Shop Now
          </p>
          <p className="px-6 py-2 bg-white text-zinc-700 border rounded-sm text-sm font-light cursor-pointer">
            Careers
          </p>
        </div>
      </div>
      <div className="">
        <Image src={Women} alt="women" height={550} />
      </div>
      {/* Last Third */}
      <div className="flex flex-row justify-between w-full my-10">
        <div>
          <p className="text-2xl font-bold text-zinc-500">
            Ready to get started?
          </p>
          <p>Create your free account now</p>
        </div>
        <div className="flex flex-row space-x-5 my-3">
          <p className="px-6 py-2 bg-indigo-400 text-white rounded-sm text-sm font-semibold cursor-pointer">
            Try it for free
          </p>
          <p className="px-6 py-2 bg-white text-indigo-400  rounded-sm text-sm font-semibold cursor-pointer">
            Chat with us
          </p>
        </div>
      </div>
    </div>
  );
}

export default JoinThePack;
