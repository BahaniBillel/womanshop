"use client";
import React from "react";
import PopularProductCard from "@/components/PopularProductCard";
import ImagesDB from "@/database/imageDB";

import { IoIosArrowRoundForward } from "react-icons/io";
function PopularProductsV2() {
  return (
    <div className="px-6 md:px-28 my-32 flex flex-col relative ">
      <div className="mb-5 flex flex-row justify-between items-center">
        <h2 className=" text-2xl md:text-3xl font-bold  text-zinc-700">
          Popular Products
        </h2>

        <p
          className="whitespace-pre space-x-4 flex flex-row
      flex-nowrap items-center justify-center text-lg font-semibold text-pink-400 cursor-pointer"
        >
          View All
          <IoIosArrowRoundForward className=" w-10 h-10" />
        </p>
      </div>

      <div className=" grid md:grid-cols-4 md:grid-rows-2 gap-5 justify-center">
        {ImagesDB.map(({ image, title, size }) => (
          <div className="keen-slider__slide" key={title}>
            <PopularProductCard image={image} title={title} size={size} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularProductsV2;
