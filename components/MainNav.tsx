'use client'
import { cn } from '@/lib/utils'
import { Category } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface MainNavProps{
    data:Category[]
}


const MainNav = ({data}:MainNavProps) => {


    const pathname = usePathname();
   
    
    const routes = data.map((route)=>({
        href:`/category/${route.id}`,
        name:route.name,
        active: pathname === `/category/${route.id}`
      }))
    
 

  return (
    <div className='mx-6 gap-x-3 lg:space-x-6 scrollbar-hide   overflow-y-auto items-center w-full flex'>
       {
         
         routes.map((route)=>{
             return(
                 <Link href={route.href} key={route.href} className={cn("  whitespace-nowrap font-medium",route.active?"text-zinc-900":"text-zinc-600")}>
                         {route.name}
                </Link>
             )
         })
       }
    </div>
  )
}

export default MainNav
