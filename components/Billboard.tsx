'use client'
import { Billboard  as BillboardType} from '@/types'
import React from 'react'
import { AspectRatio } from './ui/aspect-ratio'
import Image from 'next/image'


interface BillboardProps{
    data:BillboardType
}
 

const Billboard = ({data}:BillboardProps) => { 


  if(!data){
    return null;
  }

  return (
    <div className=' sm:p-6 lg:p-8 p-4 rounded-xl'>
      <AspectRatio ratio={16 / 6} className="bg-muted">
       <div className=' flex items-center flex-col justify-center h-full'>
       <Image
        src={data.imageUrl}
        alt={"billboard"}
        fill
        className="rounded-xl object-cover  z-10"
      /> 
      
    <h3 className='z-50  font-bold lg:text-5xl sm:text-3xl  text-zinc-900/75'>{data.label}</h3>
       </div>
    </AspectRatio>
     
    </div>
  )
}

export default Billboard
