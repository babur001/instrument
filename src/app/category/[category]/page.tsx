"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { Layout } from "@/components/category/Layout";
import ProductSelect from "@/components/category/ProductSelect";
import ProductCard from "@/components/ProductCard";
import Footer from "@/stories/Footer";
import Header from "@/stories/Header";
import Brands from "@/stories/Header/Brands";
import { Check, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { categories } from "@/stories/Header/Menu";
import ReadMore from "@/stories/ReadMore";
import CategoriesGrid from "@/components/CategoriesGrid";

function Category() {
  const [colors] = useState([
    {
      color: "white",
    },
    {
      color: "#002C48",
    },
    {
      color: "#FFF500",
    },
    {
      color: "#F73030",
    },
    {
      color: "#000000",
    },
    {
      color: "#7CF730",
    },
    {
      color: "#3038F7",
    },
  ]);
  const [os] = useState([
    {
      value: "Windows 10 Home",
    },
    {
      value: "Без системы",
    },
    {
      value: "Windows 10 Pro",
    },
    {
      value: "Linux",
    },
    {
      value: "Windows 7 Professional",
    },
  ]);
  const [rams] = useState([
    {
      value: "2 ГБ",
    },
    {
      value: "4 ГБ",
    },
    {
      value: "6 ГБ",
    },
    {
      value: "8 ГБ",
    },
    {
      value: "12 ГБ",
    },
  ]);

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

  if (false) {
    return (
      <>
        <Header />

        <div className="container mx-auto">
          <Layout>
            <Layout.Aside>
              <div className="category:crumb | py-3 space-y-1">
                <Button
                  variant="secondary"
                  className="whitespace-normal text-left h-auto py-1"
                >
                  <ChevronLeft
                    className="size-6 flex-shrink-0"
                    strokeWidth={1.25}
                  />
                  <p className="!text-base">Электроника</p>
                </Button>

                <Button
                  variant="secondary"
                  className="whitespace-normal text-left h-auto py-1"
                >
                  <ChevronLeft
                    className="size-6 flex-shrink-0"
                    strokeWidth={1.25}
                  />
                  <p className="!text-base">Ноутбуки, планшеты и компьютеры</p>
                </Button>

                <Button className="!ml-7 bg-gray-100 !text-black pointer-events-none">
                  <p className="!text-base">Ноутбуки</p>
                </Button>
              </div>

              <div className="colors mt-7">
                <h3 className="duration-200 font-bold text-base">Бренды</h3>
                <Brands className="grid grid-cols-3 gap-2" />
              </div>

              <div className="colors mt-7">
                <h3 className="duration-200 text-base font-bold">Цвет</h3>

                <div className="colors | flex items-center flex-wrap gap-2 justify-items-start | py-3 w-full">
                  {colors.map((color, index) => (
                    <p
                      key={index}
                      className="border border-gray-300 | rounded-full | w-8 h-8 | click:scale"
                      style={{ backgroundColor: color.color }}
                    ></p>
                  ))}
                </div>
              </div>

              <div className="colors mt-7">
                <h3 className="duration-200 text-base font-bold">
                  Объем видеопамяти
                </h3>

                <div className="colors | flex items-center flex-wrap gap-2 | pt-3">
                  {rams.map((ram, index) => {
                    const isActive = index === 1;
                    return (
                      <Button
                        key={index}
                        className="rounded-full"
                        variant={isActive ? "default" : "outline"}
                      >
                        {isActive ? (
                          <Check strokeWidth={2} className="h-5" />
                        ) : null}
                        {ram.value}
                      </Button>
                    );
                  })}
                </div>
              </div>

              <div className="colors mt-7">
                <h3 className="duration-200 text-base font-bold">
                  Операционная система
                </h3>

                <div className="colors | flex items-center flex-wrap gap-2 | pt-3">
                  {os.map((ram, index) => {
                    const isActive = index === 0 || index === 3;
                    return (
                      <Button
                        key={index}
                        className="rounded-full"
                        variant={isActive ? "default" : "outline"}
                      >
                        {isActive ? (
                          <Check strokeWidth={2} className="h-5" />
                        ) : null}
                        {ram.value}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </Layout.Aside>

            <Layout.Body>
              <Breadcrumb
                links={[
                  { title: "Электроника", href: "" },
                  { title: "Ноутбуки, планшеты и компьютеры", href: "" },
                  { title: "Ноутбуки" },
                ]}
              />
              <ProductSelect />

              <div className="pt-5 grid grid-cols-4 gap-2">
                {state.map((product, index) => {
                  return <ProductCard product={product} key={index} />;
                })}
              </div>

              <div className="h-[20px]" />
            </Layout.Body>
          </Layout>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="container mx-auto pt-5">
        <Layout>
          <Layout.Aside>
            <div className="categories">
              <div>
                <h3 className="text-lg font-bold hover:text-[#30A8F7] duration-200">
                  Телефоны
                </h3>
                <div className="sub:category | pt-2 grid grid-cols-1">
                  {categories[0].subs.length > 7 ? (
                    <ReadMore>
                      {categories[0] &&
                        categories[0].subs.map((sub, num) => (
                          <div
                            key={num}
                            className="text-[#001a3494] hover:text-[#30A8F7] duration-200 pt-2 font-semibold text-sm | cursor-pointer"
                          >
                            {sub.name}
                          </div>
                        ))}
                    </ReadMore>
                  ) : (
                    categories[0] &&
                    categories[0].subs.map((sub, num) => (
                      <div
                        key={num}
                        className="text-[#001a3494] hover:text-[#30A8F7] duration-200 pt-2 font-semibold text-sm | cursor-pointer"
                      >
                        {sub.name}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </Layout.Aside>
          <Layout.Body>
            <CategoriesGrid />

            <div className="h-[50px]" />

            <div className="brands">
              <h3 className="text-xl font-bold pb-5">Бренды:</h3>

              <Brands className="grid grid-cols-5 gap-10" size={`large`} />
            </div>

            <div className="h-[50px]" />
          </Layout.Body>
        </Layout>
      </div>

      <Footer />
    </>
  );
}

export default Category;
