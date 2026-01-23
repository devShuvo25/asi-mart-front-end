"use client";
import FashionBanner from "@/components/hero/Hero";
import Products from "@/components/Products/Products";
import Slider from "@/components/swiper/swiperSlide";
import React from "react";

const Home = () => {
  return (
    <div>
      <FashionBanner />
      <Slider />
      <Products />
    </div>
  );
};

export default Home;
