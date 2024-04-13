'use client'
import { Color, Size } from '@/types'
import React from 'react'
import { Button } from './ui/button'
import { useRouter, useSearchParams } from 'next/navigation'
import qs from "query-string"
interface FilterProps{
    valueKey: string
    name: string
    data:Size[] | Color[]
}

const Filter = ({
    valueKey,
    name,
    data
}:FilterProps) => {

    const searchParams = useSearchParams()
    const selectedValue = searchParams.get(valueKey)
    const router = useRouter();
    

    const onClik = (id:string)=>{
        
        const currentUrl = qs.parse(searchParams.toString())
    

        const query = {
            ...currentUrl,
             [valueKey]: id
        }
        
        if(currentUrl[valueKey] === id){
            query[valueKey] = null;
        }

        const url = qs.stringifyUrl({
            url:window.location.href,
            query
        },{skipNull:true})
        
        router.push(url);
    }
 

  return (
    <div>
      <h3 className=' mb-3 font-semibold'>{name}</h3>
       <div className='flex flex-wrap items-center gap-2 mb-4'>
       {
        data.map((item)=>{
            return( 
                <div key={item.id}>
                {name === "Colors" && (
                    <Button  onClick={()=>{onClik(item.id)}} variant={selectedValue == item.id ? 'bordered': 'outline'}  key={item.id} className='flex flex-row gap-3  h-12 items-center'>
                        {item.name}
                         <div  style={{background:item.value}}  className='h-8 w-8 cursor-pointer rounded-full  shadow-md'/>
                    </Button>
                )} 

                  {name === "Sizes" && ( 
                <Button  onClick={()=>{onClik(item.id)}} variant={selectedValue == item.id ?'default': 'outline'} key={item.id}>{item.name}</Button>
                )} 

                
                </div>
            )
        })
      }
       </div>
    </div>
  )
}

export default Filter
