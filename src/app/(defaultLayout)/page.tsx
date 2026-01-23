"use client";
import BestSoldProducts from "@/components/bestSoldProducts/bestSolledProducts";
import Brand from "@/components/brand/Brand";
import Categories from "@/components/categories/Categories";
import FashionBanner from "@/components/hero/Hero";
import JustForYou from "@/components/JustForYou/JustForYou";
import NewsLetterBanner from "@/components/newslater/newsLetterBanner";
import Products from "@/components/Products/Products";
import Slider from "@/components/swiper/swiperSlide";
import TopBrand from "@/components/topBrand/TopBrand";
import React from "react";

const Home = () => {
  return (
    <div>
      <FashionBanner />
      <Slider />
      <Products />
      <Categories/>
      <Brand/>
      <BestSoldProducts/>
      <JustForYou/>
      <TopBrand/>
      <NewsLetterBanner/>
    </div>
  );
};

export default Home;
