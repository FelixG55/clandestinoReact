import React from 'react'
import styles from '../../assets/css/header.module.css'
import logo from '../../assets/images/buho.png'

const Header = () => {

  return (
    <React.Fragment>
        <div className={styles.header}>
           <a href="/" className={`${styles.caja} ${styles.anchorHeader}`} style={{textDecoration:'none'}}><h5 >Home</h5></a>
           <a href="/location" className={`${styles.caja} ${styles.anchorHeader}`} style={{textDecoration:'none'}}><h5 >Como llegar ?</h5></a>
           <a href="/delivery" className={`${styles.caja} ${styles.anchorHeader}`} style={{textDecoration:'none'}}><h5 >Delivery</h5></a>
           <a href="/menu" className={`${styles.caja} ${styles.anchorHeader}`} style={{textDecoration:'none'}}><h5 >Menu</h5></a>
           <img className='caja' src={logo}/>
           <a href="/login" className={`${styles.caja} ${styles.anchorHeader}`} style={{textDecoration:'none'}}><h5 >Login</h5></a>
           <a href="/register" className={`${styles.caja} ${styles.anchorHeader}`} style={{textDecoration:'none'}}><h5 >Sign-Up</h5></a>
           <a href="" className={`${styles.caja} ${styles.anchorHeader}`} style={{textDecoration:'none'}}><h5 >Reservas</h5></a>
           <a href="/" className={`${styles.caja} ${styles.anchorHeader}`} style={{textDecoration:'none'}}><h5 >Carrito</h5></a>
        </div> 
               
    </React.Fragment>
  )
}

export default Header