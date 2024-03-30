import React from 'react'
import '../../assets/css/Delivery.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Product from './Product'
import { useProduct } from '../../hooks/useProduct'
import { useCategory } from '../../hooks/useCategory'

const Delivery = () => {

  const products = useProduct()
  const {categories} = useCategory()

  return (
    <React.Fragment>
        <Header/>
        <Product products = {products} categories = {categories} button={true} estilo={'containerD'}/>
        <Footer/>
    </React.Fragment>
  )
}

export default Delivery