import React, { useEffect, useState } from 'react'
import styles from '../../assets/css/Delivery.module.css'
import DetailProduct from './detailProduct'


function Product({products,categories,button,estilo}) {

  let estiloR
  if (estilo === 'containerD') {
   estiloR = styles.productContainerD
  }else if (estilo === 'containerM') {
   estiloR = styles.productContainerM
  }
  return (
    <main>
          <>
              {categories.map((category, cIndex)=>{
                return(
                  <div className={estiloR} key={`container${cIndex}`}>
                      <h2  key={`category${cIndex}`}>{category.category}</h2>
                      {products.map((product,pIndex)=>{
                        if (category.category == product.categories.name) {
                          return  (
                              <DetailProduct {...product} button ={button} key={`product${pIndex}`}/>
                          )
                        }
                      })}
                  </div>

                )})
              }
            
          </>
      
    </main>
  )
}

export default Product