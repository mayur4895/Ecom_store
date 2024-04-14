import { Color, Size } from '@/types'
import React from 'react'
import { Button } from './ui/button'
import { LiaPlusSolid } from 'react-icons/lia'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import Container from './ui/container'
import Filter from './Filter'
interface MobileFilterProps{
    colors:Color[],
    sizes:Size[],
    count:number
}
const MobileFilter = ({
    colors,
    sizes,
    count
}:MobileFilterProps) => {
  return (
    <Container >
      <Sheet>
  <SheetTrigger>        <Button className='md:hidden mx-6  flex items-center gap-4'>
          Add Filter 
        <LiaPlusSolid className='text-white'/>
        </Button></SheetTrigger>
  <SheetContent className='px-2'>
    <SheetHeader className='text-start mx-6'> 
      <span className="mb-4 font-semibold">Results: {count?count:"0"}</span>
    </SheetHeader>
    
    <div className=" w-full h-full px-8 mt-10 lg:grid lg:grid-cols-2 ">
          <div className="   lg:flex flex-col gap-4" >
            <Filter valueKey={"sizeId"} name={"Sizes"} data={sizes} />

            <Filter valueKey={"colorId"} name={"Colors"} data={colors} />
          </div>
          <div>           
        
        </div>
      </div>
  </SheetContent>
</Sheet>
 
    </Container>
  )
} 
export default MobileFilter
