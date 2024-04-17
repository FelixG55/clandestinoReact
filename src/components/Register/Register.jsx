import React, { useState } from 'react'
import logo from '../../assets/images/imagen-register.jpg'
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
            writeForm(values,errors,REGISTER_ENDPOINT,'post')
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
    <div className='container-fluid '>

        <img className='img m-5' style={{width:'250px', height:'100%'}} src={logo} alt="logo"/>
        
        <form className="g-3" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className='col-lg-3 col-md-6 col-sm-8 m-auto' >
                <input className='form-control form-control-lg bg-warning' placeholder="Nombre" type="text" {...register("name")} id="name"/>
            </div>
            {errors.name && <h6 className='text-warning'>{errors.name}</h6>}
            <div className='col-lg-3 col-md-6 col-sm-8 m-auto mt-4'>
                <input className='form-control form-control-lg bg-warning' placeholder="Apellido" type="text" {...register("lastname")} id="lastname" />
            </div>
            {errors.lastname && <h6 className='text-warning '>{errors.lastname}</h6>}
            <div className='col-lg-3 col-md-6 col-sm-8 m-auto mt-4'>
                <input className='form-control form-control-lg bg-warning'  placeholder="Email" type="text" {...register("email")} id="email"/>
            </div>
            {errors.email && <h6 className='text-warning '>{errors.email}</h6>}
            {registerValido == false && <h6 className='text-warning'>Este usuario ya esta registrado</h6>}
            <div className='col-lg-3 col-md-6 col-sm-8 m-auto mt-4'>
                <input  className='form-control form-control-lg bg-warning' placeholder="Contraseña" type="password" {...register("password")} id="password" />
            </div>
            {errors.password && <h6 className='text-warning'>{errors.password}</h6>}
            <div className='col-lg-3 col-md-6 col-sm-8 m-auto text-start mt-4'>
                <label htmlFor='image' className='form-label text-warning'>Sube la imagen del usuario</label>
                <input className='form-control bg-warning' type="file" id="image" {...register("image")}/>
            </div>
            {errors.image && <h6 className='text-warning'>{errors.image}</h6>}
            <button className='btn btn-warning my-3' style={{width:150}} type="submit">Enviar</button>
        </form>
            <a href="/">
            <button className='btn btn-warning mb-3' style={{width:150}} type="submit" value="Volver">Volver</button>
            </a>
    </div>
  )
}

export default Register