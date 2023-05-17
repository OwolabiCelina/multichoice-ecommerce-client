import React from 'react'
import ProductCards from './ProductCards'

const ProductList = ({data}) => {
  return (
    <>
    {
        data ?.map(item => (
            <ProductCards item={item}/>
     
        ))
    }
        {/* <ProductCards /> */}
       
    </>
  )
}

export default ProductList;