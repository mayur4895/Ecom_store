'use client'
import useCartStore from '@/hooks/use-cart-store'
import { Product } from '@/types'
import Image from 'next/image'
import React from 'react'
import { AspectRatio } from './ui/aspect-ratio'
import { Trash2Icon } from 'lucide-react'
import { Button } from './ui/button'
import EmptyCart from './EmptyCart'


interface CartItemProps{
    item: Product
}
const CartItem = ({item}:CartItemProps) => {
const {removeItem } = useCartStore();

 
 
  return (
    <div className=' border-zinc-200 border mt-2 p-2 shadow-sm rounded-lg'>
      <div className=' flex justify-between'>
      <div className="sm:w-[130px] md:w-[150px] w-[120px] relative p-2 rounded-md">
    <AspectRatio ratio={2/2}>
      <Image src={item?.images[0]?.url} alt="Image" fill className="rounded-md object-cover object-center" />
    </AspectRatio>  
</div>
<div className=' flex flex-col gap-4'>
    <div> 
<h1 className=' font-semibold text-xl'>{item.name}</h1>
<p>{item.desc}</p>
</div>
<span>Size: {item.size.value}</span>
<div className='flex flex-row items-center gap-x-4'>Color: <div style={{background:item?.color?.value}} className="w-4 h-4 p-4 border rounded-full w shadow-md"></div></div>
</div>
<div>
    <Button size={"icon"} onClick={() => removeItem(item.id)} className='bg-red-500 hover:bg-red-700 text-white font-bold  rounded'><Trash2Icon size={18}/></Button>
</div>
  </div> 
      </div>

  )
}

export default CartItem
