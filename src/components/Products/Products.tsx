import { products } from '@/constant/product';
import React from 'react';
import ProductCard from '../productCard/Product.Card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ArrowBigLeftDash, ArrowRight } from 'lucide-react';

const badgeData = [
    {id : 1, time : "361 Days"},
    {id : 2, time : "17 Hours"},
    {id : 3, time : "41 Minutes"},
    {id : 4, time : "25 Seconds"},
]

const Products = () => {
    return (
        <div>
            <div className='flex items-center justify-between p-10'>
                <h1 className='text-2xl font-bold'>Flash Sell</h1>
                <div className='flex items-center gap-2'>
                    {badgeData.map( badge => <Badge key={badge.id}>{badge.time}</Badge>)}
                <Button variant={"ghost"} 
                className='group flex items-center gap-2 p-0 text-sm font-medium text-muted-foreground hover:text-foreground'>View All <ArrowRight/></Button>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 lg:gap-3'>
                {products.map(p => {
                    return <ProductCard key={p.id} product={p}/>
                })}               
        </div>
        </div>
    );
};

export default Products;