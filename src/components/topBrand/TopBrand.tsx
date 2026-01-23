import { brands } from "@/constant/brand";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const TopBrand = () => {
  return (
    <div>
      <div className="py-5 flex items-center justify-between">
        <div className="relative">
          <h2 className="text-3xl font-bold text-[#222222]">
            Top Brands
          </h2>
          <div className="mt-1 h-1 w-24 rounded-full bg-orange-400"></div>{" "}
          {/* Decorative underline */}
        </div>
        <button className="group flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-black">
          View All
          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 transition-all group-hover:border-black">
            <MoveRight size={14} />
          </div>
        </button>
      </div>
      
   <div className="grid grid-cols-6 gap-3">
     {brands.map((brand) => {
        return (
          <div key={brand.id}
           className="border border-gray-300 p-3 flex items-center justify-center rounded-xl">
            <Image src={brand.icon} alt={brand.title} width={40} height={40} />
          </div>
        );
      })}
   </div>
    </div>
  );
};

export default TopBrand;

