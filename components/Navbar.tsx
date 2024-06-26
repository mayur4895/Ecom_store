
import Link from 'next/link'
import React from 'react'
import Container from './ui/container'
import MainNav from './MainNav' 
import ActionButton from './ui/action-button'
import getCategories from '@/actions/getCategories'

const Navbar = async() => {

  const data = await getCategories();
   
  
  return (
    <Container>
      <div className='w-full py-5 px-5 border-b flex md:gap-x-10 gap-x-4 items-end'>
        
      <Link className=' text-black font-bold cursor-pointer block md:hidden' href="/">M</Link>
        
      <Link className=' text-black font-bold cursor-pointer text-xl  hidden md:block' href="/">MSTORE</Link>
      <MainNav data={data}/>
      <ActionButton/>
      </div>
    </Container>
  )
}

export default Navbar
