import React from "react";
import Header from "@/stories/Header/index";
import Slider from "@/components/Slider";
import Categories from "@/components/Categories";
import Products from "@/components/Products";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Categories />
      <Products />

      <div className="h-[100px]" />
    </>
  );
};

export default Home;
