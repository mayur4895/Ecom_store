import getProduct from '@/actions/getProduct'
import getProducts from '@/actions/getProducts'
import { Gallery } from '@/components/Gallery'
import ProductList from '@/components/ProductList'
import Container from '@/components/ui/container'
import { Separator } from '@/components/ui/separator'
import React from 'react'

interface SingleProductProps{
  params:{
    productId:string
  }
}

const SingleProduct = async({params}:SingleProductProps) => {


  const product = await getProduct(params.productId);
  const suggestProducts = await getProducts({ categoryId: product?.category?.id })
   console.log(suggestProducts.length);
   
  

  return (
    <Container> 
<div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-10  my-10  mx-8'>
<div className='h-full'>
 <Gallery productItem={product}/>
  </div>
  <div>Info</div>
</div>
      <Separator/>
      <ProductList title='Related Products' items={suggestProducts}/>
    </Container>
  )
}

export default SingleProduct
