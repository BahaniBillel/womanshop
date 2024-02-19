import React from "react";
import Image from "next/image";
import Heels from "@/public/images/heels.png";
function CategoryCard({ image, title, size }) {
  return (
    <div
      className=" border border-gray-300 bg-white rounded-2xl p-8 md:w-96 shadow-md  relative
    grid grid-cols-6 group cursor-pointer hover:bg-rose-400 hover:text-white transition-all
    ease-in-out duration-1 "
    >
      <div className=" col-span-5 flex flex-col flex-nowrap justify-center items-start space-y-2">
        <h3 className="text-lg font-semibold ">{title}</h3>
        <p className="text-sm font-light pr-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          quaerat ab.
        </p>
        <p className="text-sm text-cyan-700 group-hover:text-white font-semibold">
          160 products
        </p>
      </div>
      <div
        className="absolute -right-5 bottom-0 group-hover:-translate-y-4 transition-all
      ease-in-out duration-100 "
      >
        <Image src={image} alt="heels" height={size} />
      </div>
    </div>
  );
}

export default CategoryCard;
