import React, { useContext } from 'react'
import { Authcontext } from '../context/AuthContext'
import { Link } from 'react-router-dom'

export const Login = () => {
  const { Login } = useContext(Authcontext)

  const handleLogin = async function (e) {
    e.preventDefault()

    const data = {
      email: e.target.email.value ,
      password:e.target.password.value
    }
  
    await Login.mutateAsync(data)
  }

  return (
    <main>
      <form onSubmit={handleLogin} className='flex flex-col gap-4 w-[30%] px-10'>
        <label htmlFor='email'> Email: </label>
        <input className='border-2' id='email' name='email' type="email" required />

        <label htmlFor='password'> Password: </label>
        <input className='border-2' id='password' name='password' type="password" required />

        <button className='border-2' type='submit' >Star coding now</button>
      </form>
      <Link to='/register'>Register</Link>
    </main>
  )
}
