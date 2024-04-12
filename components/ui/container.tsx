'use client'
import React from 'react'

const Container = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=' w-ma-7xl mx-auto'>
      {children}
    </div>
  )
}

export default Container
