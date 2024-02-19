import React from "react";
import Image from "next/image";
import Logo from "../public/images/logo.png";
import WomanShopping1 from "../public/images/woman_shopping.jpg";
import WomanShopping2 from "../public/images/woman_shopping2.jpg";
import WomanShopping3 from "../public/images/woman_shopping3.jpg";
import { IoMdMenu } from "react-icons/io";

import { CiHeart, CiShoppingCart, CiMenuBurger } from "react-icons/ci";

function Hero() {
  return (
    <div
      className="grid grid-cols-1 md:flex flex-row justify-center items-center 
   "
    >
      <div className="   relative   ">
        <div
          className="w-full h-full bg-gradient-to-b from-transparent to-slate-950
        
        absolute left-0 top-0"
        ></div>
        <Image src={WomanShopping1} alt="woman shopping" />
        <div className="absolute left-5 bottom-5 text-white ">
          <p className="text-5xl font-bold">
            The pinky lady <br /> flash sale
          </p>
          <p className="font-light text-xs mt-1">
            Flash Sale | 32 min left | 4 products
          </p>
        </div>
      </div>
      <div className=" hidden md:block  relative   ">
        <div
          className="w-full h-full bg-gradient-to-b from-transparent to-slate-950
        
        absolute left-0 top-0"
        ></div>
        <Image src={WomanShopping2} alt="woman shopping" />
        <div className="absolute left-5 bottom-5 text-white ">
          <p className="text-5xl font-bold">
            The pinky lady <br /> flash sale
          </p>
          <p className="font-light text-xs mt-1">
            Flash Sale | 32 min left | 4 products
          </p>
        </div>
      </div>
      <div className="hidden md:block   relative   ">
        <div
          className="w-full h-full bg-gradient-to-b from-transparent to-slate-950
        
        absolute left-0 top-0"
        ></div>
        <Image src={WomanShopping3} alt="woman shopping" />
        <div className="absolute left-5 bottom-5 text-white ">
          <p className="text-5xl font-bold">
            The pinky lady <br /> flash sale
          </p>
          <p className="font-light text-xs mt-1">
            Flash Sale | 32 min left | 4 products
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
