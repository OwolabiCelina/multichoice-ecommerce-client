import React from 'react'
import ProductCards from './ProductCards'

const ProductList = ({data}) => {
  return (
    <>
    {data?.map((item, index) => (
            <ProductCards item={item} key={index}/>
     
        ))}       
    </>
  )
}

export default ProductList;