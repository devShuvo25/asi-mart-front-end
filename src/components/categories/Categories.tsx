import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight, MoveRight } from 'lucide-react';
import { categories } from '@/constant/categoriesItems';
import { CategoryCard } from './Card/CategoryCard';

const Categories = () => {
    return (
        <div>
                 <div className="mb-8 flex items-center justify-between">
        <div className="relative">
          <h2 className="text-3xl font-bold text-[#222222]">Categories</h2>
          <div className="mt-1 h-1 w-24 rounded-full bg-orange-400"></div> {/* Decorative underline */}
        </div>
        <button className="group flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-black">
          View All
          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 transition-all group-hover:border-black">
            <MoveRight size={14} />
          </div>
        </button>
      </div>
            <div className='flex items-center justify-between'>
            {categories.map(c => <CategoryCard key={c.id} category={c}/>)}
            </div>
        </div>
    );
};

export default Categories;