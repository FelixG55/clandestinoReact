import React from 'react'
import styles from '../../assets/css/CarouselSlide.module.css'

const CarouselSlide = (propsCarusel) => {

  return (
    <div className={styles.slide}>
              <div className={styles.slideTrans}>
                    {/* <!-- imagen 1 carrusel --> */}
                    {propsCarusel.img}
                    {propsCarusel.title}
                    {propsCarusel.description}
              </div>
              
    </div>
  )
}

export default CarouselSlide