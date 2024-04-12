import React from 'react'
import { Button } from './button'
import { ShoppingBagIcon } from 'lucide-react'
import { LiaShoppingBagSolid } from 'react-icons/lia'

const ActionButton = () => {
  return (
    <Button   size={"sm"} className='ml-auto   rounded-full'>
        <div className='flex items-end gap-x-2'>
        <ShoppingBagIcon  size={22}/>
        <span className='text-sm'>0</span>
        </div>

    </Button>
  )
}

export default ActionButton
