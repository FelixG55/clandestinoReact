import React, { useState } from 'react'
import styles from '../../assets/css/Login.module.css'
import logo from '../../assets/images/buho.png'
import { useForm } from 'react-hook-form'
import { writeForm } from '../../services/writeForm'
import { formValidation } from '../../services/formValidation'
import { Navigate } from 'react-router-dom'

const Login = () => {

  const [usuarioValido, setUsuarioValido] = useState()
  const {register, handleSubmit} = useForm()
  const [errors, setErrors] = useState({})

  const handleFormSubmit = (values) => {
    const errors = formValidation(values);
    setErrors(errors);
    if(Object.keys(errors).length === 0 && Object.values(values).every(value => value !== '')){
        const LOGIN_ENDPOINT = 'http://localhost:3022/api/login';
        writeForm(values,errors,LOGIN_ENDPOINT)
        .then(res => {
            if (res == true) {
                setUsuarioValido(true)
            }else{
                setUsuarioValido(false)
            }
        })
    }
}
if (usuarioValido == true) {
    return <Navigate to = '/'/>
}

  return (
    <div className={styles.contenedor}>
        <div className={styles.logo}>
            <a href="/"><img src={logo} alt="logo"/></a>
            <h1>Bienvenido</h1>
        </div>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className={styles.nombreLogin}>
                <input placeholder= "Email"  type="text" {...register("email")} id="email" /> 
            </div>
            {errors.email && <h6 className={styles.errorMsg}>{errors.email}</h6>}
            <div className={styles.contraseñaLogin}>
                <input placeholder="Contraseña" type="password" {...register("passwordLog")} id="password" />
            </div>
            {errors.passwordLog && <h6 className={styles.errorMsg}>{errors.passwordLog}</h6>}
            {usuarioValido == false &&  <h6 className={styles.errorMsg}>Su usuario o contraseña no son validos</h6>}
            <div className={styles.recuerdame}>
                <input type="checkbox" id="recuerdame" name="recuerdame"/>
                <label >Recuerdame</label>
            </div>
            <div>
                <button className={styles.button} type="submit" value="Ingresar">Ingresar</button>
            </div>
            <a id="" href=""><h2>¿Perdiste tu contraseña?</h2></a>
            <a id="" href="/register"><h3>¿No tienes cuenta? Registrate</h3></a>
          </form>
    </div>
  )
}

export default Login