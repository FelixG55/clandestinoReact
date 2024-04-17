import { useState } from 'react'
import React, {useContext, useEffect} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Product from './Product'
import { useProduct } from '../../hooks/useProduct'
import { useCategory } from '../../hooks/useCategory'
import BannerCart from '../ProductsCart/bannerCart'
import { CartContext } from '../../context/productsCart'

const Delivery = () => {

  const products = useProduct()
  const {categories} = useCategory()
  const {cart} = useContext(CartContext)
  const [bannerCart, setBannerCart] = useState(false)
  const [initialRender, setInitialRender] = useState(true);

  useEffect(()=>{
    if (!initialRender) {
      setBannerCart(true);
    }
    setInitialRender(false);
  },[cart])

  return (
    <React.Fragment>
        <Header/>
        {bannerCart==true && <BannerCart/>}
        <Product products = {products} categories = {categories} estilo={'containerD'}/>
        <Footer/>
    </React.Fragment>
  )
}

export default Delivery