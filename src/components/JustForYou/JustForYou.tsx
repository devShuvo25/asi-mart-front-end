import { products } from "@/constant/product";
import React from "react";
import ProductCard from "../productCard/Product.Card";
import { MoveRight } from "lucide-react";

const JustForYou = () => {
  return (
    <div className="p-5">
      {/* header */}
      <div className=" flex items-center justify-between">
        <div className="relative">
          <h2 className="text-3xl font-bold text-[#222222]">Just For You</h2>
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
      <div className="flex items-center">
        {products
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default JustForYou;
