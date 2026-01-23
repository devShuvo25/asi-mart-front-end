import { products } from "@/constant/product";
import { MoveRight } from "lucide-react";
import React from "react";
import BestSoldProduct from "./card/BestSoldProductCard";

const BestSoldProducts = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div className="relative">
          <h2 className="text-2xl md:text-3xl font-bold text-[#222222]">
            Our Best Selling Products
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {products.slice(0, 3).map((product) => (
        <BestSoldProduct key={product.id} product={product} />
      ))}
      </div>
    </div>
  );
};

export default BestSoldProducts;
