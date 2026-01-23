import { products } from "@/constant/product";
import React from "react";
import ProductCard from "../productCard/Product.Card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {  ArrowRight, MoveRight } from "lucide-react";

const badgeData = [
  { id: 1, time: "361 Days" },
  { id: 2, time: "17 Hours" },
  { id: 3, time: "41 Minutes" },
  { id: 4, time: "25 Seconds" },
];

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Flash Sell</h1>
          <p className="text-gray-500">({products.length}) items Found</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {badgeData.map((badge) => (
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white" key={badge.id}>{badge.time}</Badge>
          ))}
          <button className="group ml-2 flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-black">
            View All
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 transition-all group-hover:border-black">
              <MoveRight size={14} />
            </div>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => {
          return <ProductCard key={p.id} product={p} />;
        })}
      </div>
    </div>
  );
};

export default Products;
