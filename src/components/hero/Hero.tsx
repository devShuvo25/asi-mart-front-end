import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { image } from '@/constant/image';


const FashionBanner = () => {
  return (
    <section className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[500px]">
      
      {/* Main Hero Section (Left 3 Columns) */}
      <div className="relative md:col-span-3 bg-[#FDF2D7] rounded-3xl overflow-hidden flex flex-col md:flex-row items-center px-8 md:px-16 py-12">
        {/* Decorative Background Pattern (Optional) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           {/* You can use a repeating SVG or image here for the floral swirls */}
        </div>

        <div className="z-10 flex-1 space-y-6">
          <p className="text-orange-500 font-medium italic">New Arrivals Of 2025</p>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
            Where Fashion Meets <br /> Individuality
          </h1>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-8 py-6 text-lg group">
            Shop Now <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          {/* Slider Pagination Dots */}
          <div className="flex gap-2 mt-8">
            <span className="h-3 w-3 rounded-full bg-orange-500" />
            <span className="h-3 w-3 rounded-full bg-orange-200" />
            <span className="h-3 w-3 rounded-full bg-orange-200" />
            <span className="h-3 w-3 rounded-full bg-orange-200" />
          </div>
        </div>

        <div className="relative flex-1 h-full w-full min-h-[300px] mt-8 md:mt-0">
          <Image
            src={image.model1} // Replace with your image path
            alt="Fashion Models"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>

      {/* Sidebar Promo (Right 1 Column) */}
      <div className="relative md:col-span-1 bg-[#FDF2D7] rounded-3xl overflow-hidden flex flex-col p-8">
        <div className="z-10 space-y-4">
          <span className="bg-white/80 text-orange-500 px-4 py-1 rounded-full text-sm font-semibold inline-block">
            Winter Offer
          </span>
          <h2 className="text-2xl font-bold text-slate-800">
            Hello Winter! Hot Deals on Cool Styles
          </h2>
          <Button variant="ghost" className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg w-fit group">
            <span className="mx-2">Shop Now</span> <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="relative flex-1 mt-4 min-h-[200px]">
          <Image
            src={image.model2} // Replace with your image path
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