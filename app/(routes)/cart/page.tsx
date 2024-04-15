'use client'
import CartItem from '@/components/CartItem';
import EmptyCart from '@/components/EmptyCart';
import OrderSummary from '@/components/OrderSummary';
import Container from '@/components/ui/container'
import useCartStore from '@/hooks/use-cart-store'
import React from 'react'

const CartPage = () => {
    const {Items} = useCartStore();




if(Items.length == 0){
    return <EmptyCart/>
}
    
  return (
    <>
      <div className='bg-white'>
        <Container>
            <div className='px-4 sm:px-6 lg:px-8 py-16'>
                <h2 className=' font-bold text-2xl '>Shopping Cart</h2>
            
                <div className='lg:grid lg:grid-cols-12 mt-10 gap-x-8'>
                  
                     <div className='lg:grid col-span-7'>
                        <ul>
                            {Items.toReversed().map((item)=>{
                                return(
                                    <CartItem 
                                    key={item.id}
                                    item={item}
                                    />
                                )
                            })}
                        </ul>
                     </div>
                     <div className='lg:grid col-span-5'>
                        <OrderSummary/>
                     </div>
                </div>
            </div>
        </Container>
      </div>
    </>
  )
}

export default CartPage
