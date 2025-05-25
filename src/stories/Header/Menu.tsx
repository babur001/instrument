"use client";

import { useTransition, useState } from "react";
import cn from "clsx";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { BellElectric, Car, Computer, House, PawPrint, Shirt, ToyBrick, WashingMachine } from "lucide-react";
import Link from "next/link";
import { Cross as Hamburger } from "hamburger-react";

const categories = [
  {
    title: "Электроника",
    icon: ({ isActive }: { isActive: boolean }) => <BellElectric className={cn({ "!text-primary": isActive })} strokeWidth={1.25} />,
  },
  {
    title: "Компьютерная техника",
    icon: ({ isActive }: { isActive: boolean }) => <Computer className={cn({ "!text-primary": isActive })} strokeWidth={1.25} />,
  },
  {
    title: "Бытовая техника",
    icon: ({ isActive }: { isActive: boolean }) => <WashingMachine className={cn({ "!text-primary": isActive })} strokeWidth={1.25} />,
  },
  {
    title: "Детские товары",
    icon: ({ isActive }: { isActive: boolean }) => <ToyBrick className={cn({ "!text-primary": isActive })} strokeWidth={1.25} />,
  },
  {
    title: "Дом и дача",
    icon: ({ isActive }: { isActive: boolean }) => <House className={cn({ "!text-primary": isActive })} strokeWidth={1.25} />,
  },
  {
    title: "Одежда и обувь",
    icon: ({ isActive }: { isActive: boolean }) => <Shirt className={cn({ "!text-primary": isActive })} strokeWidth={1.25} />,
  },
  {
    title: "Красота и здоровье",
    icon: ({ isActive }: { isActive: boolean }) => <PawPrint className={cn({ "!text-primary": isActive })} strokeWidth={1.25} />,
  },
  { title: "Авто", icon: ({ isActive }: { isActive: boolean }) => <Car className={cn({ "!text-primary": isActive })} strokeWidth={1.25} /> },
];

function Menu() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const menus: any[] = [];

  return (
    <Popover>
      {({ open }) => {
        return (
          <>
            <PopoverButton className="flex items-center justify-center rounded-def h-9 mx-5 bg-blue-50 pr-2 | cursor-pointer | outline-none focus:outline-none">
              <Hamburger direction="right" size={20} distance="sm" rounded color="#30a8f7" />
              <h2 className="font-medium text-base text-primary">Категории</h2>
            </PopoverButton>

            <PopoverPanel
              transition
              anchor="bottom"
              className="!w-11/12 !left-10  translate-y-5 data-closed:opacity-0 shadow-300 divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out"
            >
              <div className="flex items-start bg-white | z-50">
                <div className="w-[30%] z-10 h-[calc(100vh-125px)] overflow-y-auto">
                  <div className="p-3 | border-r border-gray-light">
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className={cn({
                          "flex items-center | py-2 pl-2 | group hover:bg-[#F2F9FF] !cursor-pointer click:scale | rounded-def": true,
                          "!bg-[#F2F9FF]": activeCategory === category.title,
                        })}
                        onMouseEnter={() => setActiveCategory(category.title)}
                      >
                        <div className="h-6 w-6">
                          <category.icon isActive={activeCategory === category.title} />
                        </div>

                        <div
                          className={cn({
                            "pl-4 | text-base font-normal pr-3 group-hover:text-primary": true,
                            "!text-primary": activeCategory === category.title,
                          })}
                        >
                          {category.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-[70%] px-5 pt-5 flex h-[calc(100vh-125px)] overflow-y-auto">
                  <div className="z-10 w-5/6 flex flex-wrap items-start">
                    {menus.map((cat, index) => (
                      <div className="category pb-7 w-1/2 pr-5" key={index}>
                        <div className="text-lg hover:text-primary duration-200 | cursor-pointer">{cat.name}</div>
                        {cat.subs.length > 7 ? (
                          <div>
                            <div className="sub:category | mt-1 | grid grid-cols-1">
                              {cat.subs.map((sub, num) => (
                                <Link
                                  key={num}
                                  href={`/category/2`}
                                  className="text-[#001a3494] hover:text-primary duration-200 pt-2 font-semibold text-sm | cursor-pointer"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="sub:category | mt-1 | grid grid-cols-1">
                            {cat.subs.map((sub, n) => (
                              <Link
                                key={n}
                                href={`/category/2`}
                                className="text-[#001a3494] hover:text-primary duration-200 pt-2 font-semibold text-sm | cursor-pointer"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="w-1/6">{/* <CategoryBrands /> */}</div>
                </div>
              </div>
            </PopoverPanel>
          </>
        );
      }}
    </Popover>
  );
}

export default Menu;
