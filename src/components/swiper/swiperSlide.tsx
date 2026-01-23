"use client";

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Swiper modules
import { Autoplay } from "swiper/modules";
import { sliders } from "@/constant/slider";
import Image from "next/image";

export default function SwiperSlider() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {sliders.map((slider) => (
          <SwiperSlide key={slider.id}>
            <div className="relative h-[150px] md:h-[200px] w-full">
              <Image
                src={slider.cover}
                alt=""
                fill
                className="rounded-2xl object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
