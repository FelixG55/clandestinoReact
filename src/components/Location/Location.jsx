import React from 'react'
import styles from '../../assets/css/Location.module.css'

const Location = () => {
  return (
    <div>
        <div className={styles.container}>
        <h1 className={styles.title}>¿Cómo llegar?</h1>
        <iframe className={styles.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.275390498805!2d-75.49127878255615!3d5.059045700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4765575f13e39f%3A0xfe64f939cfb921c2!2sClandestino%20Gastropub!5e0!3m2!1ses-419!2sco!4v1674484763645!5m2!1ses-419!2sco"></iframe>
    </div>
    <div className={styles.enviar}>
        <a href="/">
        <button type="submit" value="Volver">Volver</button>
        </a>
    </div>
    </div>
  )
}

export default Location