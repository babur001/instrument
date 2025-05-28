"use client";

import Link from "next/link";
import { useState } from "react";

function Brands({ count = 6 }: { count?: number }) {
  const [brands] = useState([
    {
      url: "/images/brands/apple.png",
    },
    {
      url: "/images/brands/stihl.png",
    },
    {
      url: "/images/brands/karcher.png",
    },
    {
      url: "/images/brands/lacoste.png",
    },
    {
      url: "/images/brands/samsung.png",
    },
    {
      url: "/images/brands/mi.png",
    },
    {
      url: "/images/brands/dell.png",
    },
    {
      url: "/images/brands/hu.png",
    },
  ]);

  return (
    <>
      <div className="inline-block">
        <h1 className="font-bold text-2xl text-[#001A34]">Бренды</h1>
      </div>

      <div className="h-[12px]" />

      <section className="brands">
        <div className={`grid gap-2 grid-cols-6`}>
          {brands.map((brand, index) => (
            <Link href={`/brands/${index}`} key={index} className="bg-gray-100/50 hover:bg-gray-100 p-8 rounded-lg">
              <div className="h-10 click:scale">
                <img src={brand.url} alt="" className="h-full object-contain mx-auto" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Brands;
