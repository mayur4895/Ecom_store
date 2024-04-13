'use client'
import { formatter } from '@/lib/utils';
import { Product  } from '@/types';
import React from 'react' 
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react'; 

interface ProductInfoProps{
    productItem:Product;
}

const ProductInfo = ({productItem}:ProductInfoProps) => {

    if(!productItem){
        return null;
    } 
  return (
    <div className=' flex flex-col gap-6 mt-5'>
        <div>
            
      <h3 className='font-bold text-4xl'>{productItem.name}</h3>
      <span>{productItem.desc}</span>
      <h2 className=' font-semibold text-xl'>{ formatter.format(Number(productItem.price))}</h2>
        </div>
       <div className='flex flex-col gap-3'>
       <div  ><span className='font-semibold'>Category</span>: {productItem.category.name}</div>
         
         <div  ><span className='font-semibold'>Size</span> : {productItem?.size?.value}</div>
         <div className='flex flex-row items-center gap-x-4'>Color: <div style={{background:productItem?.color?.value}} className="w-4 h-4 p-4 border rounded-full w shadow-md"></div></div>
          
         <Button className=' w-36 flex gap-2 rounded-full items-center'>Add To Cart <ShoppingCart size={18}/></Button>
       </div> 
    </div>
  )
}

export default ProductInfo
