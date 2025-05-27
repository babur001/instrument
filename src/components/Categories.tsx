"use client";

import { useState } from "react";
import Slider from "react-slick";
import CategoryLink from "./CategoryLink";

interface Category {
  icon: string;
  title: string;
}

function Categories() {
  const [categories] = useState<Category[]>([
    {
      icon: "/images/wash.svg",
      title: "Бытовая Техника",
    },
    {
      icon: "/images/phone.svg",
      title: "Электроника",
    },
    {
      icon: "/images/3.svg",
      title: "Электроинструменты",
    },
    {
      icon: "/images/4.svg",
      title: "Сад",
    },
    {
      icon: "/images/5.svg",
      title: "Авто",
    },
    {
      icon: "/images/6.svg",
      title: "Дом и Дача",
    },
    {
      icon: "/images/7.svg",
      title: "Строительство",
    },
    {
      icon: "/images/8.svg",
      title: "Детские товары",
    },
    {
      icon: "/images/phone.svg",
      title: "Электроника",
    },
    {
      icon: "/images/3.svg",
      title: "Электроинструменты",
    },
    {
      icon: "/images/5.svg",
      title: "Авто",
    },
    {
      icon: "/images/6.svg",
      title: "Дом и Дача",
    },
  ]);

  return (
    <section className="pt-20 container mx-auto">
      <Slider slidesToShow={9.5} slidesToScroll={5} speed={100} dots={false} infinite={false} arrows={false}>
        {categories.map((category) => {
          return <CategoryLink title={category.title} icon={category.icon} key={category.title} />;
        })}
      </Slider>
    </section>
  );
}

export default Categories;
