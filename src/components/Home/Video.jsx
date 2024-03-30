import React from 'react'
import styles from '../../assets/css/Video.module.css'
import video from '../../assets/videos/dron.mp4'
const Video = () => {
  return (
    <div className={styles.containerPrincipal}>
            <div className={styles.principal}> 
                <div className={styles.videoBackground}>
                    <video className={styles.videoForeground} muted autoPlay loop>
                    <source src={video} />
                    </video>
                </div>
                <div className={styles.letraSlogan}>         
                    <h1>clandestino</h1>
                    <h6>descubre las melodías y sabores del eje cafetero </h6>
                </div>
            </div>           
    </div>
  )
}

export default Video