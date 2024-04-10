'use client'
import Link from 'next/link'
import React from 'react'
import Container from './ui/container'
import MainNav from './MainNav'
import { getCategories } from '@/actions/getCategories'
import ActionButton from './ui/action-button'

const Navbar = async() => {

  const data = await getCategories();
   
  
  return (
    <Container>
      <div className='w-full py-5 px-5 border-b flex gap-x-20 '>
        
      <Link className=' text-black font-bold cursor-pointer text-xl' href="/">MSTORE</Link>
      <MainNav data={data}/>
      <ActionButton/>
      </div>
    </Container>
  )
}

export default Navbar
