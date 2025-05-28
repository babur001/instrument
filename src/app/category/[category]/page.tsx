"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { Layout } from "@/components/category/Layout";
import ProductSelect from "@/components/category/ProductSelect";
import ProductCard from "@/components/ProductCard";
import Products from "@/components/Products";
import { Tooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Footer from "@/stories/Footer";
import Header from "@/stories/Header";
import Brands from "@/stories/Header/Brands";
import { Check, ChevronRight, Info } from "lucide-react";
import { useState } from "react";

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

  return (
    <>
      <Header />

      <div className="container mx-auto">
        <Layout>
          <Layout.Aside className="pt-5">
            <div className="text-2xl duration-200">Категория</div>
            <div className="category:crumb | py-3">
              <div className="category__link | flex items-center | py-1.5 | click:scale">
                <ChevronRight strokeWidth={1} className="h-4" />
                <h3 className="duration-200 ml-3 | font-semibold">Электроника</h3>
              </div>

              <div className="category__link | flex items-center | py-1.5 | click:scale">
                <ChevronRight className="h-4" />
                <h3 className="duration-200 ml-3 | font-semibold">Ноутбуки, планшеты и компьютеры</h3>
              </div>

              <div className="category__link--active | px-5 py-2 mt-1 | font-semibold | text-[#30A8F7] bg-[#F2F9FF] | inline-block | rounded-[7px] | click:scale">
                Ноутбуки
              </div>
            </div>

            <div className="colors mt-7">
              <h3 className="duration-200 text-xl">Бренды</h3>
              <Brands className="grid grid-cols-4" />
            </div>

            <div className="colors mt-7">
              <h3 className="duration-200 text-xl">Цвет</h3>

              <div className="colors | grid grid-cols-5 justify-items-start gap-2 | py-3 w-2/3">
                {colors.map((color, index) => (
                  <p key={index} className="border border-gray-300 | rounded-full | w-9 h-9 | click:scale" style={{ backgroundColor: color.color }}></p>
                ))}
              </div>
            </div>

            <div className="colors mt-7">
              <h3 className="duration-200 text-xl">Объем видеопамяти</h3>

              <div className="colors | flex items-center flex-wrap gap-2 | pt-3">
                {rams.map((ram, index) => (
                  <p
                    key={index}
                    className={cn({
                      "px-6 font-semibold py-2 mb-2 | text-sm | border border-gray-300 flex items-center justify-center | click:scale | rounded-full": true,
                      "bg-[#30A8F7] text-white": index === 1 || index == 3,
                    })}
                  >
                    {index === 1 && <Check strokeWidth={1} className="h-3 mr-3" />}
                    {index === 3 && <Check strokeWidth={1} className="h-3 mr-3" />}
                    {ram.value}
                  </p>
                ))}
              </div>
            </div>

            <div className="os mt-7">
              <div className="flex items-center">
                <h3 className="duration-200 text-xl">Операционная система</h3>
                <Tooltip
                  title={`Операционная система (ОС) – это комплекс программ, предназначенных для управления ресурсами компьютера и организации взаимодействия с пользователем. В зависимости от области использования`}
                >
                  <span>
                    <Info strokeWidth={1} className="h-5 ml-2" />
                  </span>
                </Tooltip>
              </div>

              <div className="colors | flex items-center flex-wrap gap-2 ">
                {os.map((ram, index) => (
                  <p
                    key={index}
                    className={cn({
                      "px-6 font-semibold py-2 | text-sm | border border-gray-300 flex items-center justify-center | click:scale | rounded-full": true,
                      "bg-[#30A8F7] text-white": index === 0 || index == 3,
                    })}
                  >
                    {index === 0 && <Check strokeWidth={1} className="h-3 mr-3" />}
                    {index === 3 && <Check strokeWidth={1} className="h-3 mr-3" />}
                    {ram.value}
                  </p>
                ))}
              </div>
            </div>
          </Layout.Aside>

          <Layout.Body>
            <Breadcrumb />
            <ProductSelect />

            <div className="pt-5 grid grid-cols-4 gap-5">
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

  // return (
  //   <HF>
  //     <Layout>
  //       <Layout.Aside className="pt-7">
  //         <Title className="text-2xl duration-200">Категория</Title>
  //         <div className="categories">
  //           <div className="category | mt-7">
  //             <Title className="text-lg hover:text-[#30A8F7] duration-200">Телефоны</Title>
  //             <div className="sub:category | pt-2 grid grid-cols-1">
  //               {menu[0]?.subs?.length > 7 ? (
  //                 <ReadMore size={`sm`}>
  //                   {menu[0] &&
  //                     menu[0].subs.map((sub, num) => (
  //                       <div key={num} className="text-[#001a3494] hover:text-[#30A8F7] duration-200 pt-2 font-semibold text-sm | cursor-pointer">
  //                         {sub.name}
  //                       </div>
  //                     ))}
  //                 </ReadMore>
  //               ) : (
  //                 menu[0] &&
  //                 menu[0].subs.map((sub, num) => (
  //                   <div key={num} className="text-[#001a3494] hover:text-[#30A8F7] duration-200 pt-2 font-semibold text-sm | cursor-pointer">
  //                     {sub.name}
  //                   </div>
  //                 ))
  //               )}
  //             </div>
  //           </div>

  //           <div className="category | mt-7">
  //             <Title className="text-lg hover:text-[#30A8F7] duration-200">Фото и видеокамеры</Title>
  //             <div className="sub:category | pt-2 grid grid-cols-1">
  //               {menu[1]?.subs?.length > 7 ? (
  //                 <ReadMore>
  //                   {menu[1] &&
  //                     menu[1].subs.map((sub, num) => (
  //                       <div key={num} className="text-[#001a3494] hover:text-[#30A8F7] duration-200 pt-2 font-semibold text-sm | cursor-pointer">
  //                         {sub.name}
  //                       </div>
  //                     ))}
  //                 </ReadMore>
  //               ) : (
  //                 menu[1] &&
  //                 menu[1].subs.map((sub, num) => (
  //                   <div key={num} className="text-[#001a3494] hover:text-[#30A8F7] duration-200 pt-2 font-semibold text-sm | cursor-pointer">
  //                     {sub.name}
  //                   </div>
  //                 ))
  //               )}
  //             </div>
  //           </div>
  //         </div>
  //       </Layout.Aside>
  //       <Layout.Body>
  //         <Slider size={`small`} />

  //         <CategoriesGrid />

  //         <Products title={`Моноблоки`} url={`https://py.abad.uz/v1.0/api/categories/all_in_one/goods/?limit=16&offset=0&discount=0`} slides={2.7} scroll={2} />
  //         <Products url={`https://py.abad.uz/v1.0/api/categories/126/goods/?limit=12`} slides={2.7} scroll={2} title={`Планшеты`} />

  //         <Products title={`Ноутбуки`} scroll={2} url={`https://py.abad.uz/v1.0/api/categories/laptops/goods/?limit=16&offset=0&discount=0`} slides={2.7} />
  //         <div className="brands">
  //           <Title className="text-2xl | py-12">Бренды:</Title>
  //           <Brands className="grid grid-cols-5" size={`large`} />
  //         </div>
  //       </Layout.Body>
  //     </Layout>
  //   </HF>
  // );
}

export default Category;
