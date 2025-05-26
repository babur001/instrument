"use client";

import React from "react";
import cn from "clsx";
import Link from "next/link";

interface Brand {
  url: string;
}

interface BrandsProps {
  className?: string;
  size?: "large" | "small";
}

function Brands({ className, size = "small" }: BrandsProps) {
  const [brands] = React.useState<Brand[]>([
    {
      url: "/images/brands/1.png",
    },
    {
      url: "/images/brands/2.png",
    },
    {
      url: "/images/brands/3.png",
    },
    {
      url: "/images/brands/4.png",
    },
    {
      url: "/images/brands/5.svg",
    },
  ]);

  return (
    <div className={className}>
      {brands.map((brand, index) => (
        <Link key={index} href={`/brands/${index}`} className="pt-5 mx-auto flex items-center justify-center w-full">
          <div
            className={cn({
              "h-12 w-full click:scale filter grayscale hover:grayscale-0 duration-200 opacity-25 hover:opacity-100": true,
              "h-16": size === "large",
            })}
          >
            <img src={brand.url} alt="Brand logo" className="h-full object-contain mx-auto" loading="lazy" />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Brands;
