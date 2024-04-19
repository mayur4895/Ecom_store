'use client'
import React from 'react'
import { Button } from './button'
import { ShoppingBagIcon } from 'lucide-react' 

import useCartStore from '@/hooks/use-cart-store'
import { useRouter } from 'next/navigation'

const ActionButton = () => {
  const router = useRouter();
  const cart = useCartStore();
  return (
    <Button   onClick={()=>{router.push("/cart")}} size={"sm"} className='ml-auto sm:mr-2   rounded-full'>
        <div className='flex items-end gap-x-2'>
        <ShoppingBagIcon  size={22}/>
        <span className='text-sm'>{cart.Items.length}</span>
        </div>  
    </Button>
  )
}

export default ActionButton
