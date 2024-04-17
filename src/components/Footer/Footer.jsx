import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
        <section className='container-fluid text-center' style={{backgroundColor:'#ffc800'}}>
            <div className='row gx-5 justify-content-around align-items-center '>
                <article className='col-3 p-3 mb-2'>
                    <img className='w-100 ' src='/src/assets/images/logo-04-letra.png' alt=''/>
                        <p >Calle 61A #24A -45</p>
                        <p >clandestinogastropub@gmail.com</p> 
                        <p >3202086828</p>  
                </article>
                <article className='col-3 p-3 mb-2'>
                    <a href='/'><img className='w-25 mb-3' src='/src/assets/images/logo-04-buho.png' alt=''/></a>
                    <div className='row '>
                        <a className='col-4 text-end m-0 p-0 link-dark'  href='https://www.instagram.com/clandestinogastropub/'><FontAwesomeIcon icon={faInstagram} style={{height:25}} /></a>
                        <a className='col-4 link-dark' href='https://open.spotify.com/playlist/6RUQXFhBCBnVnTZyXwfCBz'><FontAwesomeIcon icon={faSpotify} style={{height:25}}/></a>
                        <a className='col-4 text-start m-0 p-0 link-dark' href='https://www.facebook.com/hashtag/clandestinogastropub'><FontAwesomeIcon icon={faFacebook} style={{height:25}}/></a>
                    </div>
                </article>

                <article className='col-3 p-3 mb-2 text-center justify-content-center '>
                    <h5>Dejanos un <br/> comentario!!!</h5>
                    <div className='form-floating  mb-2'>
                        <input type='text' className='form-control' id='nombre' placeholder='Nombre'/>
                        <label htmlFor="nombre">Nombre</label>
                    </div>
                    <div className='form-floating mb-2'>
                        <input type='text' className='form-control' id='nombreUsuario' placeholder='Nombre'/>
                        <label htmlFor="nombreUsuario">Nombre de usuario</label>
                    </div> 
                    <div className='form-floating mb-2'>
                        <textarea className='form-control' placeholder="Deja un comentario" id='textArea' style={{height:'150px'}}></textarea>
                        <label htmlFor="textArea">Deja un comentario</label>
                    </div>    
                    <button type='button'className='btn btn-light '>Enviar</button> 
                </article>
            </div>
             <div >Copyright ©  Clandestino Gastropub. Todos los derechos reservados</div>         
        </section>
    </footer>   
    
  )
}

export default Footer