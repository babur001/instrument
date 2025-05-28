import React from "react";
import Header from "@/stories/Header/index";
import Slider from "@/components/Slider";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import Brands from "@/components/Brands";
import Trust from "@/components/Trust";
import Footer from "@/stories/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Categories />
      <div className="h-[50px]" />

      <Products />
      <div className="h-[50px]" />

      <Products type="new" />

      <div className="h-[50px]" />

      <div className="container mx-auto">
        <Brands />
      </div>

      <div className="h-[50px]" />
      <Products />

      <div className="h-[50px]" />
      <div className="container mx-auto">
        <Trust />
      </div>

      <div className="h-[50px]" />
      <Footer />
    </>
  );
};

export default Home;
