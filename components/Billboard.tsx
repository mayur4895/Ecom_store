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
    <div className=' sm:p-6 lg:p-8 p-4 rounded-xl md:h-[90vh] h-[70vh]'>
      <AspectRatio  className="bg-muted md:h-[80vh] h-[60vh]">
       <div className=' flex items-center flex-col justify-center h-full'>
       <Image
        src={data.imageUrl}
        alt={"billboard"}
        fill
        className="rounded-xl object-cover  object-center z-10"
      /> 
      
    <h3 className='z-50  font-bold lg:text-5xl text-2xl  break-words text-zinc-900/75'>{data.label}</h3>
       </div>
    </AspectRatio>
     
    </div>
  )
}

export default Billboard
