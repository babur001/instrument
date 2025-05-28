"use client";

import React from "react";
import cn from "clsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderWrapper(): React.ReactElement {
  return (
    <section className="!pt-5 container mx-auto">
      <div className="w-full">
        <Slider
          dots={true}
          infinite={true}
          arrows={true}
          autoplay={true}
          speed={500}
          slidesToShow={1}
          draggable={true}
          className="center"
          slidesToScroll={1}
          centerMode={true}
        >
          <div
            className={cn({
              "!focus:ring-0 !outline-0 focus:outline-0 !border-0 px-1": true,
            })}
          >
            <img
              src="/images/full-banner.png"
              alt="Banner 1"
              className="object-cover !w-full h-full aspect-3/1 | outline-none focus:outline-none | rounded-[10px] overflow-hidden hover:shadow-100 duration-300"
            />
          </div>

          <div
            className={cn({
              "!focus:ring-0 !outline-0 focus:outline-0 !border-0 px-1": true,
            })}
          >
            <img
              src="/images/full-banner2.png"
              alt="Banner 2"
              className="object-cover !w-full h-full aspect-3/1 | outline-none focus:outline-none | rounded-[10px]  overflow-hidden"
            />
          </div>

          <div
            className={cn({
              "!focus:ring-0 !outline-0 focus:outline-0 !border-0 px-1": true,
            })}
          >
            <img
              src="/images/full-banner3.png"
              alt="Banner 3"
              className="object-cover !w-full h-full aspect-3/1 | outline-none focus:outline-none | rounded-[10px]  overflow-hidden"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default SliderWrapper;
