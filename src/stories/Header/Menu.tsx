"use client";

import React from "react";
import { JSX } from "react";
import { useState } from "react";
import cn from "clsx";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { BellElectric, Car, Computer, House, PawPrint, Shirt, ToyBrick, WashingMachine } from "lucide-react";
import Link from "next/link";
import { Cross as Hamburger } from "hamburger-react";
import Brands from "@/stories/Header/Brands";
import ReadMore from "../ReadMore";

interface SubSubCategory {
  name: string;
  slug: string;
}

interface SubCategory {
  name: string;
  slug: string;
  subs?: SubSubCategory[];
}

interface Category {
  name: string;
  icon: ({ isActive }: { isActive: boolean }) => JSX.Element;
  subs: SubCategory[];
}

const categories: Category[] = [
  {
    name: "Электроника",
    icon: ({ isActive }: { isActive: boolean }) => <BellElectric className={cn({ "!text-primary": isActive })} strokeWidth={1.25} />,
    subs: [
      {
        name: "Телефоны",
        slug: "phones",
        subs: [
          { name: "Смартфоны", slug: "smartphones" },
          { name: "Кнопочные телефоны", slug: "feature-phones" },
          { name: "Кнопочные телефоны для пожилых", slug: "elderly-phones" },
        ],
      },
      {
        name: "Планшеты",
        slug: "tablets",
        subs: [
          { name: "Планшеты Apple", slug: "apple-tablets" },
          { name: "Планшеты Samsung", slug: "samsung-tablets" },
          { name: "Планшеты Xiaomi", slug: "xiaomi-tablets" },
        ],
      },
      {
        name: "Телевизоры",
        slug: "tv",
        subs: [
          { name: "LED телевизоры", slug: "led-tv" },
          { name: "OLED телевизоры", slug: "oled-tv" },
          { name: "4K телевизоры", slug: "4k-tv" },
        ],
      },
      {
        name: "Аудиотехника",
        slug: "audio",
        subs: [
          { name: "Наушники", slug: "headphones" },
          { name: "Беспроводные наушники", slug: "wireless-headphones" },
          { name: "Портативные колонки", slug: "portable-speakers" },
        ],
      },
      {
        name: "Фото и видео",
        slug: "photo-video",
        subs: [
          { name: "Фотоаппараты", slug: "cameras" },
          { name: "Зеркальные камеры", slug: "dslr" },
          { name: "Объективы", slug: "lenses" },
        ],
      },
    ],
  },
  {
    name: "Компьютерная техника",
    icon: ({ isActive }: { isActive: boolean }) => <Computer className={cn({ "!text-primary": isActive })} strokeWidth={1.25} />,
    subs: [
      {
        name: "Компьютеры",
        slug: "computers",
        subs: [
          { name: "Игровые компьютеры", slug: "gaming-pcs" },
          { name: "Бизнес компьютеры", slug: "business-pcs" },
          { name: "Мини ПК", slug: "mini-pcs" },
        ],
      },
      {
        name: "Ноутбуки",
        slug: "laptops",
        subs: [
          { name: "Игровые ноутбуки", slug: "gaming-laptops" },
          { name: "Ультрабуки", slug: "ultrabooks" },
          { name: "Ноутбуки для дизайна", slug: "design-laptops" },
        ],
      },
      {
        name: "Комплектующие",
        slug: "components",
        subs: [
          { name: "Процессоры", slug: "processors" },
          { name: "Материнские платы", slug: "motherboards" },
          { name: "Видеокарты", slug: "graphics-cards" },
        ],
      },
      {
        name: "Принтеры",
        slug: "printers",
        subs: [
          { name: "Лазерные принтеры", slug: "laser-printers" },
          { name: "Струйные принтеры", slug: "inkjet-printers" },
          { name: "3D принтеры", slug: "3d-printers" },
        ],
      },
      {
        name: "Сетевое оборудование",
        slug: "network",
        subs: [
          { name: "Маршрутизаторы", slug: "routers" },
          { name: "Модемы", slug: "modems" },
          { name: "Сетевые карты", slug: "network-cards" },
        ],
      },
    ],
  },
  {
    name: "Бытовая техника",
    icon: ({ isActive }: { isActive: boolean }) => <WashingMachine className={cn({ "!text-primary": isActive })} strokeWidth={1.25} />,
    subs: [
      { name: "Холодильники", slug: "refrigerators" },
      { name: "Стиральные машины", slug: "washing-machines" },
      { name: "Посудомоечные машины", slug: "dishwashers" },
      { name: "Кондиционеры", slug: "air-conditioners" },
      { name: "Пылесосы", slug: "vacuum-cleaners" },
    ],
  },
  {
    name: "Детские товары",
    icon: ({ isActive }: { isActive: boolean }) => <ToyBrick className={cn({ "!text-primary": isActive })} strokeWidth={1.25} />,
    subs: [
      { name: "Игрушки", slug: "toys" },
      { name: "Детская одежда", slug: "kids-clothing" },
      { name: "Детская обувь", slug: "kids-shoes" },
      { name: "Коляски", slug: "strollers" },
      { name: "Детская мебель", slug: "kids-furniture" },
    ],
  },
  {
    name: "Дом и дача",
    icon: ({ isActive }: { isActive: boolean }) => <House className={cn({ "!text-primary": isActive })} strokeWidth={1.25} />,
    subs: [
      { name: "Мебель", slug: "furniture" },
      { name: "Строительство", slug: "construction" },
      { name: "Ремонт", slug: "repair" },
      { name: "Инструменты", slug: "tools" },
      { name: "Сад и огород", slug: "garden" },
    ],
  },
];

function Menu() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <Popover>
      <PopoverButton className="flex items-center justify-center rounded-def h-9 mx-5 bg-blue-50 pr-2 | cursor-pointer | outline-none focus:outline-none">
        <Hamburger direction="right" size={20} distance="sm" rounded color="#30a8f7" />
        <h2 className="font-medium text-base text-primary">Категории</h2>
      </PopoverButton>

      <PopoverPanel
        transition
        anchor="bottom"
        className="!w-9/12 !left-10 !z-20 py-3 min-h-2/3 translate-y-3 data-closed:opacity-0 shadow-300 divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out"
      >
        <div className="flex items-start bg-white | z-50">
          <div className="w-[30%] z-10 overflow-y-auto">
            <div className="p-3 | border-r border-gray-light">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={cn({
                    "flex items-center | py-2 pl-2 | group hover:bg-[#F2F9FF] !cursor-pointer click:scale | rounded-def": true,
                    "!bg-[#F2F9FF]": activeCategory === category.name,
                  })}
                  onMouseEnter={() => setActiveCategory(category.name)}
                >
                  <div className="h-6 w-6">
                    <category.icon isActive={activeCategory === category.name} />
                  </div>

                  <div
                    className={cn({
                      "pl-4 | text-base font-normal pr-3 group-hover:text-primary": true,
                      "!text-primary": activeCategory === category.name,
                    })}
                  >
                    {category.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[70%] px-5 pt-5 flex overflow-y-auto">
            <div className="z-10 w-5/6 grid grid-cols-2 gap-5">
              {categories
                .find((category) => category.name === activeCategory)
                ?.subs?.map((category, index) => (
                  <div className="pr-5" key={index}>
                    <div className="text-lg font-bold hover:text-primary duration-200 | cursor-pointer">{category.name}</div>
                    <ReadMore hide={!category.subs?.length || category.subs?.length < 7}>
                      <div className="sub:category | mt-1 | grid grid-cols-1 !pl-2">
                        {category.subs?.map((sub, num) => (
                          <Link
                            key={num}
                            href={`/category/${sub.slug}`}
                            className="text-[#001a3494] hover:text-primary duration-200 pt-2 font-semibold text-sm | cursor-pointer"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </ReadMore>
                  </div>
                ))}
            </div>

            <div className="w-1/6">
              <Brands />
            </div>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
}

export default Menu;
