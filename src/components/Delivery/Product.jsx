import React, { useEffect, useState } from 'react'
import DetailProduct from './DetailProduct'
import Loading from '../Loading'


function Product({products,categories,estilo}) {

  // let estiloR
  // if (estilo === 'containerD') {
  //  estiloR = styles.productContainerD
  // }else if (estilo === 'containerM') {
  //  estiloR = styles.productContainerM
  // }
  return (
    <main>
              {categories.map((category, cIndex)=>{
                return(
                  <div className={`container-fluid bg-black text-center` } key={`container${cIndex}`}>
                      <h2 className='text-light mb-4' key={`category${cIndex}`}>{category.category}</h2>
                      <div className='row justify-content-around my-1 '>
                        {products.map((product,pIndex)=>{
                          if (category.category == product.categories.name) {
                            return  (
                              <DetailProduct {...product} key={`product${pIndex}`}/>
                            )
                          }
                        })}
                      </div>
                  </div>

                )})
              }         
    </main>
  )
}

export default Product