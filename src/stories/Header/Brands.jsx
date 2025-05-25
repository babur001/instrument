import { useState } from "react";
import cn from "clsx";
import Link from "next/link";
function Brands(props) {
  const [brands] = useState([
    {
      url: "/images/brands/apple.png",
    },
    {
      url: "/images/brands/samsung.png",
    },

    {
      url: "/images/brands/hu.png",
    },

    {
      url: "/images/brands/dell.png",
    },
    {
      url: "/images/brands/mi.png",
    },
  ]);

  return (
    <div className={props.className}>
      {brands.map((brand, index) => (
        <Link className={`pt-5 mx-auto flex items-center justify-center w-full`} href={`/brands/${index}`} key={index}>
          <div
            className={cn({
              "h-12 w-full click:scale filter grayscale hover:grayscale-0 duration-200 opacity-25 hover:opacity-100": true,
              "h-16": props.size === `large`,
            })}
          >
            <img src={brand.url} alt="" className="h-full object-contain mx-auto " />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Brands;
