import React from "react";
import Image from "next/image";

function BrandCard({ title, subtitle, image }) {
  return (
    <div className="flex flex-col justify-center  items-center  space-y-4 flex-nowrap">
      <Image src={image} alt="brand" width={120} />

      <p className="text-sm font-bold text-zinc-600">{title}</p>
      <p className="text-xs font-light">{subtitle}</p>
    </div>
  );
}

export default BrandCard;
