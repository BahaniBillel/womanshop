import React from "react";
import Background from "@/public/images/background.jpg";

function BackgroundImage() {
  return (
    <div className=" px-6 md:px-28  overflow-hidden py-16 ">
      <div
        className="h-[70vh] bg-fixed rounded-3xl relative"
        style={{
          backgroundImage: `url(${Background.src})`,
          backgroundSize: "cover", // Cover the entire page
          backgroundPosition: "center center", // Center the background image
        }}
      >
        <div className="absolute left-5 md:left-20 top-1/2 -translate-y-1/2 md:w-2/4 flex flex-col space-y-4">
          <h3 className="text-5xl md:text-6xl font-bold text-white">
            People Don&#39;t Listen
          </h3>
          <p className="text-white text-pretty">
            Beats&#39; first on-ear headphones with active noise cancellation.
            The Solo Pros analyze ambient noise with their built-in microphones
            and cancel out the clamor of city streets and the low rumble of a
            subway or plane.
          </p>
          <div className="flex flex-row space-x-5 my-3">
            <p className="px-6 py-2 bg-indigo-400 text-white rounded-sm text-sm font-light cursor-pointer">
              Buy Now
            </p>
            <p className="px-6 py-2 bg-white text-zinc-700 border rounded-sm text-sm font-light cursor-pointer">
              Features
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackgroundImage;
