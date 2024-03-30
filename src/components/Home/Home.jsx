import React from 'react'
import styles from '../../assets/css/Home.module.css'

import Header from '../Header/Header'
import Video from './video'
import Carrousel from '../Carousel/Carrousel'
import Footer from '../Footer/Footer'

const Home = () => {
  const carouselItemsSlide =[
    {      
         img: <img src='/src/assets/images/slide1.png' alt="Background Cerveza"/>,
         title: <h2>cervezas artesanales</h2>,
         description: <p>productos locales</p>
   },
    {      
         img: <img src='/src/assets/images/slide2.png' alt="Background Cerveza"/>,
         title: <h2>orgullosamente manizaleño</h2>,
         description: <p>visita al buho comelón/p</p>
   },
    {      
         img: <img src='/src/assets/images/slide3.png' alt="Background Cerveza"/>,
         title: <h2>mini conciertos</h2>,
         description: <p>descubre nuevos artistas</p>
   },
    {      
         img: <img src='/src/assets/images/slide4.png' alt="Background Cerveza"/>,
         title: <h2>clientes felices</h2>,
         description: <p>nuestros invitados de honor</p>
   },
    {      
         img: <img src='/src/assets/images/slide5.png' alt="Background Cerveza"/>,
         title: <h2>menú del día</h2>,
         description: <p>encuentra un menú inspirado en un pais diferente</p> 
   },
    {      
         img: <img src='/src/assets/images/slide6.png' alt="Background Cerveza"/>,
         title: <h2>el buho</h2>,
         description: <p>sigue la BUHISEÑAL</p>
   },
    {      
         img: <img src='/src/assets/images/slide7.png' alt="Background Cerveza"/>,
         title: <h2>delivery</h2>,
         description: <p>eco-empaques</p>
   },
    {      
         img: <img src='/src/assets/images/slide8.png' alt="Background Cerveza"/>,
         title: <h2>entradas</h2>,
         description: <p>yumi yumi</p>
   },
    {      
         img: <img src='/src/assets/images/slide9.png' alt="Background Cerveza"/>,
         title: <h2>sanduches</h2>,
         description: <p>comida de autor</p>
   },
    {      
         img: <img src='/src/assets/images/slide10.png' alt="Background Cerveza"/>,
         title: <h2>hamburguesas</h2>,
         description:  <p>siempre deliciosas</p>
   },
]
  return (
    <React.Fragment>
        <Header/>
        <Video/>
        <div className={styles.containerNosotros}>
             <div>
                 <h2 className={styles.question}>Quiénes somos </h2>
                 <p>Somos un Gastropub moderno en el corazón del eje cafetero en la vibrante ciudad de Manizales, donde combinamos la pasión por la gastronomía y la coctelería en un ambiente único. Ofrecemos cervezas artesanales de emprendimientos locales y apoyamos a los músicos de la región, permitiendo a nuestros invitados conocer artistas independientes en nuestras pantallas y disfrutar de mini conciertos. En nuestra casa también encontrarás una taza de café de la mejor calidad, procuramos apoyar a nuestros campesinos y contribuir a la sostenibilidad de nuestro entorno. Ven a Clandestino Gastropub y descubre una experiencia diferente llena de sabor, música y  conciencia social.</p>
             </div>
        </div>
        <Carrousel items = {1} itemsCarousel ={carouselItemsSlide}/>
        <Footer/>
    </React.Fragment>
  )
}

export default Home