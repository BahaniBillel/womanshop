import React from "react";
import BrandCard from "@/components/BrandCard";
import BrandImagesDB from "@/database/brandImagesDB";
import { IoIosArrowRoundForward } from "react-icons/io";
function PopularBrands() {
  return (
    <div className="px-6 md:px-28 my-20 flex flex-col justify-center space-y-10">
      <div className="mb-5 flex flex-row justify-between items-center">
        <h2 className=" text-2xl md:text-3xl font-bold  text-zinc-700">
          Popular Brands
        </h2>

        <p
          className="whitespace-pre space-x-4 flex flex-row
      flex-nowrap items-center justify-center text-lg font-semibold text-pink-400 cursor-pointer"
        >
          View All
          <IoIosArrowRoundForward className=" w-10 h-10" />
        </p>
      </div>
      <div
        className="grid grid-cols-2 gap-5 justify-center   md:flex  md:flex-row  items-center
       md:space-y-0 md:justify-between md:px-16 "
      >
        {BrandImagesDB.map((brand) => {
          return (
            <BrandCard
              key={brand.title}
              image={brand.image}
              title={brand.title}
              subtitle={brand.subtitle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PopularBrands;
