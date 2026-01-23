import { ProductCardProps } from "@/types/product";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const BestSoldProduct = ({product} : ProductCardProps) => {
    const {title,image,currentPrice,originalPrice} = product
  return (
    <div className="relative mx-auto flex h-[280px] w-full max-w-2xl items-center overflow-hidden rounded-[32px] bg-[#FFF2D9] px-10">
      {/* Background Decorative Circles */}
      <div className="absolute -right-10 top-[-20%] h-48 w-48 rounded-full border-[15px] border-[#FFA500] opacity-100"></div>
      <div className="absolute -right-20 bottom-[-10%] h-40 w-40 rounded-full border-[15px] border-[#FFA500] opacity-100"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col gap-3">
        <h2 className="text-2xl font-bold text-[#1A1A1A]">
          {title}
        </h2>
        
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-[#FFA500]">BDT {currentPrice}</span>
          <span className="text-lg text-gray-500 line-through decoration-gray-600">
            {originalPrice}
          </span>
        </div>

        <button className="group mt-2 flex w-fit items-center gap-1 border-b-2 border-[#FFA500] pb-0.5 text-lg font-bold text-[#1A1A1A] transition-all hover:text-[#FFA500]">
          Buy Now
          <MoveUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>

      {/* Model Image */}
      <div className="absolute bottom-0 right-4 h-[90%] w-[50%]">
        <Image
          src={image}// Replace with your actual image path
          alt={title}
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>
    </div>
  );
};

export default BestSoldProduct;