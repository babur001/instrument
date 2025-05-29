"use client";

import { useState } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";

function Products({ type }: { type?: string }) {
  const [count, setCount] = useState(1);
  const [state, setstate] = useState(
    Array.from({ length: 10 }, () => {
      return {
        img: ["https://i.ibb.co/0p6JrCrJ/cm55rfbifoubkc6m7d0g-1.png"],
        name: "Молоток столярный Vira Rage 450г",
        cost: {
          usd: "124 000 сум",
        },
      };
    })
  );

  return (
    <section className="container mx-auto">
      <div className="inline-block relative">
        <h1 className="font-bold text-2xl text-[#001A34]">Бытовая Техника</h1>
        {type === "new" ? (
          <p className="bg-[#F3FFF6] text-[#00F836] inline-block | absolute -top-3 -right-7 text-xs font-bold | px-3 py-1 | rounded-full">
            New
          </p>
        ) : null}
      </div>

      <div className="pt-5">
        <Slider
          slidesToShow={5}
          infinite={false}
          slidesToScroll={4}
          dots={false}
          prevArrow={<></>}
          nextArrow={<></>}
        >
          {state.map((product, index) => {
            return <ProductCard product={product} key={index} />;
          })}
        </Slider>
      </div>
    </section>
  );
}

export default Products;
