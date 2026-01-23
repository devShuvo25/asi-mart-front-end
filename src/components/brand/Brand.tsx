import { products } from "@/constant/product";
import { ArrowRight, Star, MoveRight } from "lucide-react";
import Image from "next/image";
import model from '@/assets/model1.png'
import React from "react";

const Brand = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8 flex items-center justify-between">
        <div className="relative">
          <h2 className="text-2xl md:text-3xl font-bold text-[#222222]">Our Special Brand Products</h2>
          <div className="mt-1 h-1 w-24 rounded-full bg-orange-400"></div> {/* Decorative underline */}
        </div>
        <button className="group flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-black">
          View All
          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 transition-all group-hover:border-black">
            <MoveRight size={14} />
          </div>
        </button>
      </div>

      <div className="flex flex-col gap-8 xl:flex-row">
        {/* Left Banner */}
        <div className="relative min-h-[350px] md:min-h-[450px] overflow-hidden rounded-[20px] bg-[#FEF3D7] p-8 md:p-12 flex-1">
          <div className="relative z-10 flex flex-col gap-4 max-w-md">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#222222]">
              Make Your Fashion Look More Changing
            </h1>
            <p className="text-base md:text-lg text-gray-700">Get Off Selected Clothing Items</p>
            <button className="mt-4 flex w-fit items-center gap-3 rounded-lg bg-[#FFA500] px-6 py-3 font-bold text-white shadow-lg shadow-orange-200 transition-transform active:scale-95">
              Shop Now
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Model Image */}
          <div className="absolute bottom-0 right-0 h-[80%] md:h-[90%] w-[50%] md:w-[60%]">
            <Image
              src={model}
              alt="Fashion Model"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>

        {/* Right Product Grid */}
        <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
          {products.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-hover hover:shadow-md"
            >
              {/* Product Image Wrapper */}
              <div className="h-20 w-20 md:h-24 md:w-24 flex-shrink-0 rounded-xl bg-[#F3F4F6] p-2">
                <Image
                  src={product.image}
                  height={80}
                  width={80}
                  className="h-full w-full object-contain"
                  alt={product.title}
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col gap-1">
                <h3 className="line-clamp-1 text-sm md:text-[15px] font-semibold text-gray-800">
                  {product.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#FFA500]">
                    BDT {product.currentPrice}
                  </span>
                  <span className="text-xs text-gray-400 line-through">
                    {product.originalPrice}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-[#FFA500] text-[#FFA500]" />
                  <span className="text-xs font-bold text-gray-700">{product.rating}</span>
                  <span className="text-[11px] text-gray-400">
                    ({product.reviewsCount} Reviews)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;