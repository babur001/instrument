"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Star from "./Star";
import Slider from "react-slick";
import { MinusIcon, Plus, PlusIcon, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          <p className="bg-[#F3FFF6] text-[#00F836] inline-block | absolute -top-3 -right-7 text-xs font-bold | px-3 py-1 | rounded-full">New</p>
        ) : null}
      </div>

      <div className="pt-5">
        <Slider slidesToShow={5} infinite={false} slidesToScroll={4}>
          {state.map((product, index) => {
            return (
              <div
                // href={"#" || `/product/${index}`}
                className="flex-shrink-0 relative cursor-pointer hover:shadow-200 block h-full !w-[230px] shadow-100 rounded-xl overflow-hidden"
                key={index}
              >
                <div className="rounded-[7px] p-2 group duration-300 h-full">
                  <div className="w-full block aspect-square rounded-xl overflow-hidden">
                    <img src={product.img[0]} alt="2" className="w-full h-full object-contain" />
                  </div>

                  <div className="px-1 py-2 space-y-2">
                    <p className="w-48 text-black text-sm hover:text-[#30A8F7] duration-150">{product.name}</p>

                    <div className="flex items-center">
                      <Star
                        onRate={(e) => {
                          console.log(e);
                        }}
                        star={4}
                        rate={3}
                        total="12"
                      />
                    </div>

                    <h1 className="font-bold text-base text-[#001A34]">{product.cost.usd}</h1>

                    <div className="">
                      {index === 2 ? (
                        <>
                          <div className="flex items-center justify-center">
                            <div className="flex items-center gap-3">
                              <Button className="!rounded-lg" variant="outline" size="icon" onClick={() => setCount(count - 1)} disabled={count === 1}>
                                <MinusIcon className="h-3 w-3" />
                              </Button>

                              <span className="!text-base font-medium">{count}</span>

                              <Button className="!rounded-lg" variant="outline" size="icon" onClick={() => setCount(count + 1)}>
                                <PlusIcon className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </>
                      ) : (
                        <Button variant="outline" className="w-full text-xs rounded-full">
                          <Plus strokeWidth={1.5} /> Добавить в корзину
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default Products;
