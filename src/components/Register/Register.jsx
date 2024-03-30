import React, { useState } from 'react'
import logo from '../../assets/images/imagen-register.jpg'
import styles from '../../assets/css/Register.module.css'
import { useForm } from 'react-hook-form'
import { writeForm } from '../../services/writeForm'
import { formValidation } from '../../services/formValidation'
import { Navigate } from 'react-router-dom'


const Register = () => {
       
    const [registerValido, setRegisterValido] = useState()
    const {register, handleSubmit} = useForm()
    const [errors, setErrors] = useState({})

    const handleFormSubmit = (values) => {
        const errors = formValidation(values);
        setErrors(errors);
        if(Object.keys(errors).length === 0 && Object.values(values).every(value => value !== '')){
            const REGISTER_ENDPOINT = 'http://localhost:3022/api/register';
            writeForm(values,errors,REGISTER_ENDPOINT)
            .then(res => {
                if (res == 'registered') {
                    setRegisterValido(false)
                }else{
                    setRegisterValido(true)
                }
            })
        }
    }

    if (registerValido == true) {
        return <Navigate to = '/login'/>
    }

  return (
    <div className={styles.contenedor}>
        <div className={styles.logo}>
            <img className={styles.imagen} src={logo} alt="logo"/>
        </div>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className={styles.containerForm} >
                <label></label>
                <input placeholder="Nombre" type="text" {...register("name")} id="name"/>
            </div>
            {errors.name && <h6 className={styles.errorMsg}>{errors.name}</h6>}
            <div className={styles.containerForm}>
                <label></label>
                <input placeholder="Apellido" type="text" {...register("lastname")} id="lastname" />
            </div>
            {errors.lastname && <h6 className={styles.errorMsg}>{errors.lastname}</h6>}
            <div className={styles.containerForm}>
                <label></label>
                <input className={styles.hola} placeholder="Email" type="text" {...register("email")} id="email"/>
            </div>
            {errors.email && <h6 className={styles.errorMsg}>{errors.email}</h6>}
            {registerValido == false && <h6 className={styles.errorMsg}>Este usuario ya esta registrado</h6>}
            <div className={styles.containerForm}>
                <label ></label>
                <input placeholder="Contraseña" type="password" {...register("password")} id="password" />
            </div>
            {errors.password && <h6 className={styles.errorMsg}>{errors.password}</h6>}
            <div className={styles.containerForm}>
                <label >Sube la imagen del usuario</label>
                <input type="file" id="image" {...register("image")}/>
            </div>
            {errors.image && <h6 className={styles.errorMsg}>{errors.image}</h6>}
            <div className={styles.enviar}>
                <button type="submit">Enviar</button>
            </div>
        </form>
        <div  className={styles.enviar}>
            <a href="/">
            <button type="submit" value="Volver">Volver</button>
            </a>
        </div>
    </div>
  )
}

export default Register