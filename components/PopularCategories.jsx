import React from "react";
import CategoryCard from "@/components/CategoryCard";
import ImagesDB from "@/database/imageDB";
import { IoIosArrowRoundForward } from "react-icons/io";

function PopularCategories() {
  return (
    <div className="px-6 md:px-28 my-16 md:my-32 flex flex-col ">
      <div className="mb-5 flex flex-row justify-between items-center">
        <h2 className=" text-2xl md:text-3xl font-bold  text-zinc-700">
          Popular Categories
        </h2>

        <p
          className="whitespace-pre space-x-4 flex flex-row
      flex-nowrap items-center justify-center text-lg font-semibold text-pink-400 cursor-pointer"
        >
          View All
          <IoIosArrowRoundForward className=" w-10 h-10" />
        </p>
      </div>
      <div className=" grid grid-col-1 md:grid-cols-3 md:grid-rows-2 gap-16 md:gap-5 items-center  justify-between">
        {ImagesDB.map(({ image, title, size }) => (
          <CategoryCard image={image} title={title} key={title} size={size} />
        ))}
      </div>
    </div>
  );
}

export default PopularCategories;
