import { Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCardProps } from "@/types/product";
import Image from "next/image";



export default function ProductCard({
product
}: ProductCardProps) {
  const {title,image,discountAmount,currentPrice,originalPrice,rating,reviewsCount}  = product || {}
  return (
    <Card className="w-full max-w-[350px] overflow-hidden rounded-3xl border-none shadow-lg">
      <CardContent className="p-4">
        {/* Image Container */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#F3F4F6] flex items-center justify-center">
          {/* Discount Badge */}
          <div className="absolute left-3 top-3">
            <Badge className="bg-[#E54D43] hover:bg-[#E54D43] text-white rounded-full px-3 py-1 font-medium border-none">
              - BDT {discountAmount}
            </Badge>
          </div>
          
          <Image
            src={image}
            alt={title}
            fill
            className="h-4/5 w-4/5 object-contain mix-blend-multiply"
          />
        </div>

        {/* Product Details */}
        <div className="mt-4 space-y-2">
          <h3 className="text-xl  font-bold text-[#374151]">{title}</h3>
          
          <div className="flex items-baseline gap-3">
            <span className="text-md  font-bold text-[#FBBF24]">
              BDT {currentPrice?.toFixed(2)}
            </span>
            <span className="text-gray-400 line-through text-md">
              {originalPrice?.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <Star className="h-5 w-5 fill-[#FBBF24] text-[#FBBF24]" />
            <span className="font-bold text-[#374151]">{rating}</span>
            <span className="text-gray-500">({reviewsCount} Reviews)</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-[#FFA500] cursor-pointer hover:bg-[#FF8C00] text-white text-md font-semibold py-5 rounded-md transition-colors"
        >
          Order Now
        </Button>
      </CardFooter>
    </Card>
  );
}