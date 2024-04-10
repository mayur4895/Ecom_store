import { getBillboard } from '@/actions/getBillboard';
import Billboard from '@/components/Billboard'; 
import React from 'react'

const Homepage = async() => {

  const data = await getBillboard("661232ffea323317e4004ec9");
  return (
    <div>
      <Billboard data={data}/>
    </div>
  )
}

export default Homepage
