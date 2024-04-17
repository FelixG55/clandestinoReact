import React, { useContext, useState } from 'react'
import logo from '../../assets/images/buho.png'
import { useForm } from 'react-hook-form'
import { writeForm } from '../../services/writeForm'
import { formValidation } from '../../services/formValidation'
import { Navigate } from 'react-router-dom'
import { SessionContext } from '../../context/session.jsx'

const Login = () => {

  const [usuarioValido, setUsuarioValido] = useState()
  const {register, handleSubmit} = useForm()
  const [errors, setErrors] = useState({})
  const {session, setSession} = useContext(SessionContext)

  console.log(session);

  const handleFormSubmit = (values) => {
    const errors = formValidation(values);
    setErrors(errors);
    if(Object.keys(errors).length === 0 && Object.values(values).every(value => value !== '')){
        const LOGIN_ENDPOINT = 'http://localhost:3022/api/login';
        writeForm(values,errors,LOGIN_ENDPOINT,'post')
        .then(res => {
            console.log(res.image);
            if (res.logged == true) {
                setUsuarioValido(true);
                setSession({
                    logged: true,
                    user: values.email,
                    image: res.image,
                    admin : res.admin
                })
            }else{
                setUsuarioValido(false)
            }
        })
    }
}
if (usuarioValido == true) {
    return <Navigate to = '/delivery'/>
    
}

  return (
    <div className='container-fluid'>
       
            <a  href="/"><img className='img m-5' src={logo} alt="logo" style={{height:'150px'}}/></a>
            <h1 className='text-light mb-5 '>Bienvenido</h1>
        
            <form className="g-3" onSubmit={handleSubmit(handleFormSubmit)}>
                <div className='col-lg-3 col-md-6 col-sm-8 m-auto'>
                    <input className='form-control form-control-lg bg-warning ' placeholder= "Email" type="text" {...register("email")} id="email" />
                </div>
                {errors.email && <h6 className='text-warning'>{errors.email}</h6>}

                <div className='col-lg-3 col-md-6 col-sm-8 m-auto mt-4'>
                    <input className='form-control form-control-lg bg-warning ' placeholder="Contraseña" type="password" {...register("passwordLog")} id="password" />
                </div>
                {errors.passwordLog && <h6 className='text-warning'>{errors.passwordLog}</h6>}
                {usuarioValido == false &&  <h6 className='text-warning'>Su usuario o contraseña no son validos</h6>}
                
                <div className='col-3 m-auto form-check'>
                    <input className='form-check-input float-none bg-warning ' type="checkbox" id="recuerdame"/>
                    <label className="form-check-label text-light mb-3 " htmlFor="recuerdame">Recuérdame</label>
                </div>
                <div>
                    <button className='btn btn-warning mb-3' type="submit" value="Ingresar">Ingresar</button>
                </div>
                <a className='text-light link-underline-warning link-warning ' id="" href="">¿Perdiste tu contraseña?</a><br/>
                <a className='text-light link-underline-warning link-warning' id="" href="/register">¿No tienes cuenta? Registrate</a>
          </form>
    </div>
  )
}

export default Login