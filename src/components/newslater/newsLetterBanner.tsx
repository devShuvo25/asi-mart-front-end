import { ArrowRight } from "lucide-react";
import Image from "next/image";
import heroImg from '@/assets/Best High End Makeup Worth The Splurge - Kindly Unspoken.jpg'

const NewsLetterBanner = () => {
  return (
    <div className="relative w-full my-5  overflow-hidden rounded-3xl bg-gradient-to-r from-[#003B73] via-[#0056b3] to-[#E67E22] p-8 md:p-12 min-h-[320px] flex items-center">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full gap-8">
        {/* Text Content */}
        <div className="flex-1 text-white space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-md">
            Join as a Seller, Grow Your Business
          </h2>
          <p className="text-blue-100 text-sm md:text-base max-w-sm">
            Expand your reach and grow your business with Asisart
          </p>
          <button className="flex items-center gap-2 bg-[#FFA500] hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-xl transition-all active:scale-95 shadow-lg">
            Join Now <ArrowRight size={20} />
          </button>
        </div>

        {/* Product Collage Image */}
        <div className="flex-1 relative h-64 w-full max-w-lg">
          <Image
            height={100}
            width={100}
            src={heroImg} 
            alt="Product assortment" 
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetterBanner