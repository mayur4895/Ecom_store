'use client'
import { Product as ProductDataType } from '@/types';
import React, { EventHandler, MouseEventHandler } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Expand, ShoppingCart } from 'lucide-react';
import { TbTrolley } from 'react-icons/tb';
import { BsCart } from 'react-icons/bs';
import { BiExpandAlt } from 'react-icons/bi';
import { formatter } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import UseModal from '@/hooks/use-modal-store';
import { Button } from './button';


interface ProductCardProps{
 product:ProductDataType

}
const ProductCard = ({
 product
}:ProductCardProps) => {

const router = useRouter();
const {onOpen ,Isopen} = UseModal();
 

const handlClick= ()=>{
  
    router.push(`/product/${product.id}`)
}


const OnPreview:MouseEventHandler<HTMLButtonElement> =(event)=>{
  
  event.stopPropagation();
 onOpen(product)
}

  return (
    <Card className='group  w-[200px] '  onClick={handlClick}>
    <div className="w-[200px] relative p-2 rounded-md">
    <AspectRatio ratio={2/2}>
      <Image src={product?.images[0]?.url} alt="Image" fill className="rounded-md object-cover" />
    </AspectRatio> 
    
   <div className='h-3-black opacity-0 absolute bottom-4 right-0 w-full  transition-opacity   group-hover:opacity-100   '>
 <div className='w-full  flex justify-center items-center gap-4'>
  <Button onClick={(e)=>{OnPreview(e)}} className='bg-white  text-gray-800 p-2 rounded-full cursor-pointer hover:scale-105 hover:bg-white'>   
 <Expand      size={18} />
 </Button>
 
 <Button onClick={()=>{}} className='bg-white  text-gray-800 p-2 rounded-full cursor-pointer hover:scale-105 hover:bg-white'>   
 <ShoppingCart      size={18} />
 </Button>
 </div>
</div>
  </div> 
  <CardFooter className='px-2 pb-2    w-full '>
   <div className='flex flex-col  w-full'>
   <CardTitle className='font-semibold text-lg  truncate  w-full'>{product.name}</CardTitle>
    
    
   <CardDescription className=' font-semibold text-gray-600 text-sm  w-full truncate'>{product.category.name}</CardDescription>
    <span className=' font-bold mt-2'>{ formatter.format(Number(product.price))}</span>
       </div>
  </CardFooter>
</Card>

  )
}

export default ProductCard
