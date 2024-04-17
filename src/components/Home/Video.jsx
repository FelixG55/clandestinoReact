import React from 'react'
import styles from '../../assets/css/Video.module.css'
import video from '../../assets/videos/dron.mp4'
const Video = () => {
  return (
    <div className='row justify-content-center align-items-center' style={{height:550}}>

                <video className='col h-100' muted autoPlay loop>
                  <source src={video} />
                </video>
                
                <div className={`col ${styles.letraSlogan}`  } >         
                    <h1 className='' style={{fontSize:80}}>clandestino</h1>
                    <h6 className='text-light fw-bold' style={{fontSize:16}}>descubre las melodías y sabores del eje cafetero </h6>
                </div>
                     
    </div>
  )
}

export default Video