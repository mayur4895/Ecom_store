'use client'
import useCartStore from '@/hooks/use-cart-store'
import { formatter } from '@/lib/utils'
import React, { useActionState, useEffect } from 'react'
import { Button } from './ui/button'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import toast from 'react-hot-toast'

 
const OrderSummary = () => {
const Items = useCartStore((state) => state.Items)
const removeAll = useCartStore((state)=>state.removeAll)
const searchParams = useSearchParams();

const TotalPrice = Items.reduce((total,item)=>{
   return total + Number(item.price)
},0)

 
 

useEffect(()=>{
  
  if(searchParams.get('success')){
    toast.success("payment Successfull")
    removeAll()
  }
  
  if(searchParams.get('canceld')){
    toast.error("something went wrong ")
  }
},[searchParams,removeAll])


const onCheckOut = async()=>{
  const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`,{
    productIds:Items.map((item)=>item.id)
  }) 


  window.location = res.data.url
}
 
  return (
    <div className='  shadow-sm md:mt-0 mt-4 border-zinc-200 rounded-lg border w-full h-full py-4 px-4 '>
      <div>
        <h1 className='font-semibold text-xl text-nowrap mb-4'>Order Summary</h1>
        <div className='flex flex-col  items-end gap-4'>{Items.map((item)=>{
            return(
                <div key={item.id} className='flex w-full justify-between items-end'> <span>{item.name}  </span>  {formatter.format(Number(item.price))} <br /></div>
                
            )
        })}</div>
        <div className='flex justify-between items-end w-full flex-row mt-5'>
            <h1 className=' font-bold text-xl'>Order Total</h1>  

            <span>{formatter.format(Number(TotalPrice))}</span>
        </div>
        <Button className=' mt-8 w-full' disabled={Items.length==0} onClick={onCheckOut}>Checkout</Button>
      </div>

    </div>
  )
}

export default OrderSummary
