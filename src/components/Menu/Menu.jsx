import React from 'react'

import Header from '../Header/Header'
import Carrousel from '../Carousel/Carrousel'
import Video from '../Home/video'
import Footer from '../Footer/Footer'
import Product from '../Delivery/Product'


const Menu = () => {
    const carouselItemsSlide =[
        {      
             img: <img src='/src/assets/images/menuslide1.png' alt="menu1"/>,
        
       },
        {      
             img: <img src='/src/assets/images/menuslide2.png' alt="menu2"/>,
             
       },
        {      
             img: <img src='/src/assets/images/menuslide3.png' alt="menu3"/>,
             
       }
    ]
    const itemMenu =[
        {
            name: 'Menú del Día ',
            image: 'http://localhost:3022/images/productosDelivery/menúDelDía.png',
            description: '¡Ven y viaja con nosotros! Descrube la gastronomía del mundo probando nuestro menú del día inspirado en sabores internacionales. Disponible de lunes a viernes.',
            categories: {name: 'Nuestros Recomendados'},
            price: 15900
        },
        {
            name: 'Steak fiorito',
            image: 'http://localhost:3022/images/productosDelivery/IMG_1695.jpg',
            description: 'Filete de lomo ancho de res en cocción de mantequilla y finas hierbas acompañado de puré cremoso y ensalada Fiorito.',
            categories: {name: 'Nuestros Recomendados'},
            price: 32900
        },
        {
            name: 'Salmón tender',
            image: 'http://localhost:3022/images/productosDelivery/IMG_1689 2.jpg',
            description: 'Salmón sellado en aceite de oliva y sal gruesa, sobre una cama de puré de ripio de papa y aire de estragón y almendras acompañado de espinaca y tomate cherry.',
            categories: {name: 'Nuestros Recomendados'},
            price: 35900
        },
        {
            name: 'Pie de chocolate',
            image: 'http://localhost:3022/images/productosDelivery/pie-chocolate.jpeg',
            description: 'Servido sobre la mejor masa tipo galleta crujiente, relleno con la tradicional receta de chocolate y cubierto con finas tiras de masa horneada, salen del horno dorados y listos para disfrutarse.',
            categories: {name: 'Postres'},
            price: 15900
        },
        {
            name: 'Rosa mistica',
            image: 'http://localhost:3022/images/productosDelivery/rosa-mistica.jpg',
            description: 'Bizcocho de almendra, mousse de mascarpone, compota de mora',
            categories: {name: 'Postres'},
            price: ''
        },
        {
            name: 'Tartaleta de limón',
            image: 'http://localhost:3022/images/productosDelivery/tartele-limon.jpg',
            description: 'Pastel con base de masa dulce con una capa de crema de limón y otra de merengue por encima.',
            categories: {name: 'Postres'},
            price: ''
        }
    ]
    const categories = [
        {category:'Nuestros Recomendados'},
        {category: 'Postres'}
    ]
    
  return (
    <React.Fragment>
        <Header/>
        <Carrousel items = {2} itemsCarousel ={carouselItemsSlide}/>
        <Video/>
        <Product products={itemMenu} categories={categories} estilo={'containerM'}/>
        <Footer/>
    </React.Fragment>
  )
}

export default Menu