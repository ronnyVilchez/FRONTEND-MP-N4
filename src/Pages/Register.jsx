import React, { useContext } from 'react'
import { Authcontext } from '../context/AuthContext'
import { Link } from 'react-router-dom'

export const Register = () => {
  const { regiterMutation } = useContext(Authcontext)

  const handleRegister = async function (e) {
    e.preventDefault()

    const data = {
      email: e.target.email.value ,
      password:e.target.password.value
    }
  
    await regiterMutation.mutateAsync(data)
  }

  return (
    <main>
      <form onSubmit={handleRegister} className='flex flex-col gap-4 w-[30%] px-10'>
        <label htmlFor='email'> Email: </label>
        <input className='border-2' id='email' name='email' type="email" required />

        <label htmlFor='password'> Password: </label>
        <input className='border-2' minLength={8} id='password' name='password' type="password"
       required />

        <button className='border-2' type='submit' >Star coding now</button>
      </form>
      <Link to='/login'>Login</Link>
    </main>
  )
}
/* pattern="(?=.*[A-Z]).{8,}" 
title="La contraseña debe tener al menos una letra mayúscula y mínimo 8 caracteres"  */