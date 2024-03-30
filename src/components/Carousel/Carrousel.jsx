import React from 'react'
import styles from '../../assets/css/Carousel.module.css'

import CarouselSlide from './CarouselSlide'
import { ArrowLeft } from '@rsuite/icons'
import {ArrowRight} from '@rsuite/icons'
import { carouselItemsSlide } from '../../services/carouselItemsSlide'

const Carrousel = ({items,itemsCarousel}) => {

      const {visibleItems,nextItems, prevItems} = carouselItemsSlide(items,itemsCarousel)

  return (
    <div className={styles.carousel} data-carousel>
            <ArrowLeft style={{color: "#000000" , size:"100px"}} className={styles.carouselButton} onClick={prevItems}/>
          {
                visibleItems.map((item, index) =>{
                      return(
                            <CarouselSlide {...item} key ={index} />
                            )
                        })
                  }
            <ArrowRight style={{color: "#000000"}} className={styles.carouselButton} onClick={nextItems}/>
    </div>
  )
}

export default Carrousel