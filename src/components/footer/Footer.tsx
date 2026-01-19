// components/Footer.tsx
import { FC } from "react";
import { Instagram, Facebook, Linkedin, Youtube, Phone, Mail, MapPin} from "lucide-react";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <footer className="bg-[#0F1B3D] text-white px-8 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo & Description */}
        <div className="space-y-4 md:col-span-2">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-yellow-500">ASI<span className="text-white">MART</span></h1>
          </div>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtem porincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </p>
          <div className="flex space-x-3 mt-3">
            <a href="#"><Facebook className="w-5 h-5 text-gray-300 hover:text-white" /></a>
            <a href="#"><Instagram className="w-5 h-5 text-gray-300 hover:text-white" /></a>
            <a href="#"><Youtube className="w-5 h-5 text-gray-300 hover:text-white" /></a>
            <a href="#"><Linkedin className="w-5 h-5 text-gray-300 hover:text-white" /></a>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-semibold mb-4">PAGES</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">Support Policy</a></li>
            <li><a href="#" className="hover:text-white">Return Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Category */}
        <div>
          <h3 className="font-semibold mb-4">Category</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">Mens Fashion</a></li>
            <li><a href="#" className="hover:text-white">Denim Collection</a></li>
            <li><a href="#" className="hover:text-white">Western Wear</a></li>
            <li><a href="#" className="hover:text-white">View All</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Asiamart Samsur Nahar Complex, 31/C/1, Topkhana Road</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Puraton Paltan, Dhaka-1000</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +8801322-920885</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> asiamarthol@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Partners */}
      <div className="max-w-7xl mx-auto mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row md:justify-between items-center gap-6 text-sm text-gray-300">
        <p>© 2024-2025. Asiamart All Right Reserved. Design By Hasan Habib Hira</p>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <span className="font-semibold">PAYMENT PARTNERS:</span>
            <Image src="/partners/bkash.png" alt="Bkash" width={50} height={20} />
            <Image src="/partners/nagad.png" alt="Nagad" width={50} height={20} />
            <Image src="/partners/dbbl.png" alt="DBBL" width={50} height={20} />
            <Image src="/partners/rocket.png" alt="Rocket" width={50} height={20} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-4 flex flex-wrap items-center gap-4 text-gray-300">
        <span className="font-semibold">DELIVERY PARTNERS:</span>
        <Image src="/partners/redx.png" alt="RedX" width={60} height={24} />
        <Image src="/partners/pathao.png" alt="Pathao" width={60} height={24} />
        <Image src="/partners/steadfast.png" alt="SteadFast" width={60} height={24} />
      </div>
    </footer>
  );
};

export default Footer;
