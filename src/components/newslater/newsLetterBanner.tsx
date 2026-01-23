import { ArrowRight } from "lucide-react";
import Image from "next/image";
import heroImg from '@/assets/Best High End Makeup Worth The Splurge - Kindly Unspoken.jpg'

const NewsLetterBanner = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-r from-[#003B73] via-[#0056b3] to-[#E67E22] p-8 md:p-12 min-h-[300px] flex items-center">
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full gap-8">
          {/* Text Content */}
          <div className="flex-1 text-white space-y-4 text-center md:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight md:max-w-md mx-auto md:mx-0">
              Join as a Seller, Grow Your Business
            </h2>
            <p className="text-blue-100 text-sm md:text-base md:max-w-sm mx-auto md:mx-0">
              Expand your reach and grow your business with Asisart
            </p>
            <div className="flex justify-center md:justify-start pt-2">
              <button className="flex items-center gap-2 bg-[#FFA500] hover:bg-orange-500 text-white font-semibold py-3 px-8 rounded-xl transition-all active:scale-95 shadow-lg">
                Join Now <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Product Collage Image */}
          <div className="flex-1 relative h-48 sm:h-64 w-full max-w-lg">
            <Image
              src={heroImg} 
              alt="Product assortment" 
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterBanner