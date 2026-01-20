"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"; // adjust path according to your project
import { categories } from "@/constant/categoriesItems";
import { ChevronDown, Menu } from "lucide-react";

const CategoriesDropdown: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex cursor-pointer items-center justify-between w-full px-4 py-2 bg-yellow-500 text-white rounded">
        <Menu className="me-1" /> Browse Categories
        <ChevronDown className="ml-2 h-4 w-4 " />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-60 bg-white transition-all duration-700 ease-out">
        {categories.map((c) => {
          return (
            <DropdownMenuItem
              className="hover:text-white cursor-pointer border border-y-gray-200"
              key={c.id}
            >
              {c.label}
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuItem className="text-yellow-500 font-semibold cursor-pointer">
          View All Categories →
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoriesDropdown;
