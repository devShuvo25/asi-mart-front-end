import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { image } from '@/constant/image';


const FashionBanner = () => {
  return (
    <section className="container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
      
      {/* Main Hero Section (Left 3 Columns) */}
      <div className="relative lg:col-span-3 bg-[#FDF2D7] rounded-3xl overflow-hidden flex flex-col md:flex-row items-center px-6 md:px-16 py-10 md:py-12">
        <div className="z-10 flex-1 space-y-4 md:space-y-6 text-center md:text-left">
          <p className="text-orange-500 font-medium italic">New Arrivals Of 2025</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
            Where Fashion Meets <br className="hidden md:block" /> Individuality
          </h1>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-6 md:px-8 py-5 md:py-6 text-base md:text-lg group">
            Shop Now <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          {/* Slider Pagination Dots */}
          <div className="flex justify-center md:justify-start gap-2 mt-6 md:mt-8">
            <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-orange-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-orange-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-orange-200" />
          </div>
        </div>

        <div className="relative flex-1 h-[250px] sm:h-[350px] md:h-full w-full mt-6 md:mt-0">
          <Image
            src={image.model1}
            alt="Fashion Models"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>

      {/* Sidebar Promo (Right 1 Column) */}
      <div className="relative lg:col-span-1 bg-[#FDF2D7] rounded-3xl overflow-hidden flex flex-col p-6 md:p-8">
        <div className="z-10 space-y-3">
          <span className="bg-white/80 text-orange-500 px-3 py-1 rounded-full text-xs font-semibold inline-block">
            Winter Offer
          </span>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800">
            Hello Winter! Hot Deals on Cool Styles
          </h2>
          <Button variant="ghost" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg w-fit group">
            <span className="mr-2">Shop Now</span> <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="relative flex-1 mt-6 min-h-[200px] lg:min-h-0">
          <Image
            src={image.model2}
            alt="Winter Model"
            fill
            className="object-contain object-bottom"
          />
        </div>
      </div>

    </section>
  );
};

export default FashionBanner;