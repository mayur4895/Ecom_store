'use cient'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const EmptyCart = () => {
    const router = useRouter();
  return (
    <div className=' w-full  h-auto items-center justify-center flex'>
      <div className='text-center py-10'>
      <div className='w-[200px]'>
        <Image
        src={"/emptycart.png"}
        height={400}
        width={400}
        alt='emptycart'
        className='object-cover  object-center opacity-50'

        />
      </div>
      <p className=' text-neutral-500'>No Items In Cart ,Cart Is Empty </p>
      <Button  className='mt-5' onClick={()=>{router.push("/")}}>Home</Button>
      </div>
    </div>
  )
}

export default EmptyCart
