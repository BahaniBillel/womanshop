import React from "react";
import Image from "next/image";
import StarRatings from "react-star-ratings";

function PopularProductCard({ image, title, size }) {
  return (
    <div
      className=" border border-gray-300 bg-white rounded-2xl p-8 w-64 h-96 shadow-md  relative
    grid grid-rows-9 grid-cols-1 group"
    >
      <div className="whitespace-pre row-span-1 flex flex-row justify-between space-x-6">
        <p className="text-zinc-700 font-semibold">$199.99</p>
        <StarRatings
          rating={5}
          starRatedColor="gold"
          numberOfStars={5}
          name="rating"
          starDimension="14px"
          starSpacing="2px"
        />
      </div>
      <div
        className=" row-span-4 transition-all
      ease-in-out duration-100  justify-center items-center flex"
      >
        <Image src={image} alt="heels" height={120} />
      </div>
      <div className=" row-span-3 flex flex-col flex-nowrap justify-center items-start space-y-1">
        <h3 className="text-xs  text-pink-400">{title}</h3>
        <h3 className="text-sm font-semibold ">{title}</h3>
        <p className="text-sm font-light pr-2 line-clamp-2 text-zinc-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          quaerat ab.
        </p>
      </div>
      <div
        className="row-span-1 p-2 bg-white text-zinc-700 border cursor-pointer text-sm text-center  rounded-md
      group-hover:bg-pink-400 group-hover:text-white group-hover:shadow-md "
      >
        Add to Cart
      </div>
    </div>
  );
}

export default PopularProductCard;
