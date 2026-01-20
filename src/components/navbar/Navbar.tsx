"use client";

import { Search, Phone, User, ShoppingCart, Heart, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CategoriesDropdown from "../dropdown/categoriesDropdown";

export default function Navbar() {
  return (
    <header className="fixed z-50 w-full border-b bg-white">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-1 text-2xl font-bold">
          <span className="text-orange-500">ASI</span>
          <span className="text-yellow-500">MART</span>
        </div>

        {/* Search */}
        <div className="flex w-1/2 max-w-xl">
          <Input
            placeholder="Search your product..."
            className="rounded-r-none py-0.5 focus:outline-0"
          />
          <Button className=" bg-accent text-white " variant="default">
            <Search className="mr-1 h-4 w-4" /> Search
          </Button>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="p-2 border border-gray-300 rounded-lg">
            <Phone className="h-4 w-4" />

            </div>
            <div className="leading-tight">
              <div className="text-xs">Hotline</div>
              <div className="font-medium opacity-60">+8801859-648507</div>
            </div>
          </div>

          <Select defaultValue="en">
            <SelectTrigger className="w-[110px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="bn">Bangla</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between bg-blue-50 px-6 py-2">
        {/* Categories */}
        
            <div>
                <CategoriesDropdown/>
            </div>
    

        {/* Icons */}
        <div className="flex items-center gap-6">
          <IconBadge icon={<Heart className="h-5 w-5" />} count={2} />
          <IconBadge icon={<ShoppingCart className="h-5 w-5" />} count={3} />

          <div className="flex items-center gap-2">
            <User className="h-5 w-5" />
            <span className="text-sm font-medium">Mr. Triple H</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function IconBadge({ icon, count }: { icon: React.ReactNode; count: number }) {
  return (
    <div className="relative">
      {icon}
      <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] text-white">
        {count}
      </span>
    </div>
  );
}
