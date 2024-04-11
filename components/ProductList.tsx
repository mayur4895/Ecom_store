'use client'
import React from 'react'
import Container from './ui/container' 
import {  Product as ProductListDataType } from '@/types';
import ProductCard from './ui/product-card';


export const revalidation = 0;

interface ProductListProps{
title:string,
items:ProductListDataType[]
}
const ProductList =  ({items,title}:ProductListProps) => {
 
  return (
    <Container>
    <div className='w-full py-5 px-5   '>
           <h2 className='text-black font-bold   text-xl'>{title}</h2> 
           <div className='flex flex-wrap w-full mt-10 gap-x-4'>
                  {
                    items.map((product)=>{
                    return( <ProductCard 
                      product={product}
                      key={product.id}
                    />)
                    })
                  }
           </div>

    </div>
  </Container>
  )
}

export default ProductList
