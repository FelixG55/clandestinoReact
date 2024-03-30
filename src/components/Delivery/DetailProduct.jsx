import React from 'react'
import styles from '../../assets/css/Delivery.module.css'

  const DetailProduct = (product) => {

  return (
  <div>
    <div className={styles.item}>
        <h3>{product.name}</h3>
        <img src={`src/assets/images/delivery-products/productosDelivery/${product.image}`} alt="" />
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>$ {product.price}</p>
        {product.button ==true && <button className="manito">AGREGAR PRODUCTO<i class="fas fa-shopping-bag"></i></button>}
    </div>
  </div>  
    
  )
}

export default DetailProduct