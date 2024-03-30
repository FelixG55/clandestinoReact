import React from 'react'
import  styles from '../../assets/css/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
        <section className={styles.containerFooter}>
            <article className={styles.containerContacto}>
                <img className={styles.logoFooter} src='/src/assets/images/logo-04-letra.png' alt=''/>
                <div className={styles.contactos}>
                    <p className={styles.mailContacto}>Calle 61A #24A -45</p>
                    <p className={styles.mailContacto}>clandestinogastropub@gmail.com</p> 
                    <p className={styles.numeroContacto}>3202086828</p>  
                </div>
            </article>

            <article className={styles.containerRedes}>
                <div><a href='/'><img className={styles.buhoBlanco} src='/src/assets/images/logo-04-buho.png' alt=''/></a>
                </div>
                <div className={styles.containerIconos}>
                    <a href='https://www.instagram.com/clandestinogastropub/'><FontAwesomeIcon icon={faInstagram} className={styles.icon}/></a>
                    <a href='https://open.spotify.com/playlist/6RUQXFhBCBnVnTZyXwfCBz'><FontAwesomeIcon icon={faSpotify} className={styles.icon}/></a>
                    <a href='https://www.facebook.com/hashtag/clandestinogastropub'><FontAwesomeIcon icon={faFacebook} className={styles.icon}/></a>
                </div>
            </article>

            <article className={styles.containerFormFooter}>
                <div action='/' method='post' className={styles.formFooter}> 
                    <div className={styles.containerInputs}>
                        <h5 >Dejanos un <br/> comentario!!!</h5>
                        <input type='text' name='nombre' id='nombre' placeholder='nombre'/>
                        <input type='text' placeholder='nombre de usuario' name='nombre-usuario' id='nombre-usuario'/>
                        <textarea name='mensajes'placeholder='mensaje' id='' cols='24' rows='10'></textarea>
                        <button value='Enviar' >Enviar</button> 
                    </div>
                </div>
            </article>
        </section>
      <div className={styles.copyright}>Copyright ©  Clandestino Gastropub. Todos los derechos reservados</div>         
    </footer>   
    
  )
}

export default Footer