'use client'
import React, { useEffect, useState } from 'react'

const Container = ({children}:{children:React.ReactNode}) => {

  const [isMounted,setisMounted] = useState(false)


    useEffect(()=>{
    setisMounted(true);
    },[setisMounted])
    
    if(!isMounted){
        return null
    }

  return (
    <div className=' w-max-7xl mx-auto'>
      {children}
    </div>
  )
}

export default Container
