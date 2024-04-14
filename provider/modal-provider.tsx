'use client'
import PreviewModal from '@/components/PreviewModal'
import ViewModal from '@/components/ui/modal'
import React, { useEffect, useState } from 'react'

const Modalprovider = () => {

    const [isMounted,setisMounted] = useState(false)


    useEffect(()=>{
    setisMounted(true);
    },[setisMounted])
    
    if(!isMounted){
        return null
    }


  return (
    <>
      <PreviewModal/>
    </>
  )
}

export default Modalprovider
