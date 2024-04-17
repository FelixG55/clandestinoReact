import React, { useContext } from 'react'
import Header from '../Header/Header'
import ProductsCart from './ProductsCart'
import Footer from '../Footer/Footer'
import { CartContext } from '../../context/productsCart'
import ResumeCart from './resumeCart'
import EmptyCart from './EmptyCart'

function Cart() {

  const {cart, setCart} = useContext(CartContext)
  return (
    <>
        <Header/>
        <div className="container-fluid bg-warning pt-3" style={{height:500}}>
          <div className="row 1 m-5 ">
            <div className="col-8 ">
              {cart.length > 0 ?cart.map((product,pIndex)=>{
              return (
              <ProductsCart {...product} key={`cart${pIndex}`}/>
              )
              }):<EmptyCart/>}
            </div>
              <ResumeCart cart={cart}/>
          </div>
        </div>
        {/* <Footer/> */}
    </>
  )
}

export default Cart