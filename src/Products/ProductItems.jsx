import React from 'react'
import "./products.css"

const ProductItems = ({result}) => {
  return (
    <>
      <section className='card-container'>
        {result}
      </section>
    </>
  )
}

export default ProductItems