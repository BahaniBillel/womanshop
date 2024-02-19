"use client";
import React from "react";
import PopularProductCard from "@/components/PopularProductCard";
import ImagesDB from "@/database/imageDB";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider, setCurrentSlide } from "keen-slider/react";
import { IoIosArrowRoundForward } from "react-icons/io";
function PopularProducts() {
  const [loaded, setLoaded] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    mode: "free",

    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1.3, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 4, spacing: 5 },
      },
    },
    slides: { perView: 1 },

    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
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

      <div ref={sliderRef} className="keen-slider">
        {ImagesDB.map(({ image, title, size }) => (
          <div className="keen-slider__slide" key={title}>
            <PopularProductCard image={image} title={title} size={size} />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}
    </div>
  );
}

export default PopularProducts;

// related to slider
function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
