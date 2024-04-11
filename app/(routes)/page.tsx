 
import getBillboard from '@/actions/getBillboard';
import getProducts from '@/actions/getProducts';
import Billboard from '@/components/Billboard'; 
import ProductList from '@/components/ProductList';
import Product from '@/components/ProductList';
import React from 'react'


export const revalidate = 0;

const Homepage = async() => {
 const products = await getProducts({isFeatured: true})
  
  const data = await getBillboard("661232ffea323317e4004ec9");
  return (
    <div>
      <Billboard data={data}/>
      <ProductList title="Features Product" items={products} />
    </div>
  )
}

export default Homepage
