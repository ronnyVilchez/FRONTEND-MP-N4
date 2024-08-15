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
    

<main className='flex w-full h-screen justify-center items-center'>
      
        <section className='flex flex-col gap-4 border-2 p-8 rounded-3xl ' >
          <figure className='px-6'>
            <img src="/public/images/devchallenges.svg" alt="devchallenges" />
          </figure>
          <h2 className='w-[20rem] text-[18px] pl-6 font-semibold'>Join thousands of learnens from around the world</h2>
          <h2 className='w-[20rem] text-[14.5px] pl-6'>Master web development by making real-life projects.There are multiple paths for you to choose </h2>

          <form onSubmit={handleRegister} className='flex flex-col gap-4 w-full px-6'>

            <section className='flex flex-row min-w-[20rem] min-h-[3rem] gap-4 px-4 items-center border-2 rounded-md'>
              <img src="/public/images/mail.svg" alt="mail" />
              <input className=' outline-none' placeholder='Email' id='email' name='email' type="email" required />
            </section>

            <section className='flex flex-row  min-w-[20rem] min-h-[3rem] gap-4 px-4 items-center border-2 rounded-md'>
              <img src="/public/images/lock.svg" alt="lock" />
              <input className=' outline-none' placeholder='Password' id='password' name='password' type="password" minLength={8} required />
            </section>

            <button className='bg-[#2F80ED]  font-semibold text-center  text-white rounded-md  min-w-[20rem] min-h-[2.5rem]' type='submit' >Star coding now</button>
          </form>
          <section className='flex flex-col gap-4 items-center'>
            <h3 className='text-[#828282]'>or continue with these social profile</h3>

            <figure className='flex flex-row gap-4'>
              <img src="/public/images/Google.svg" alt="Google" />
              <img src="/public/images/Facebook.svg" alt="Facebook" />
              <img src="/public/images/Twitter.svg" alt="Twitter" />
              <img src="/public/images/Gihub.svg" alt="Gihub" />
            </figure>
            <h3 className='text-[#828282]'>Adready a member? <Link className='text-[#47A9E0]' to='/login'>Login</Link> </h3>
          </section>
        </section>
      
    </main>






  )
}
/* pattern="(?=.*[A-Z]).{8,}" 
title="La contraseña debe tener al menos una letra mayúscula y mínimo 8 caracteres"  */
{/* 
      <form  className='flex flex-col gap-4 w-[30%] px-10'>
        <label htmlFor='email'> Email: </label>
        <input className='border-2' id='email' name='email' type="email" required />

        <label htmlFor='password'> Password: </label>
        <input className='border-2' minLength={8} id='password' name='password' type="password"
       required />

        <button className='border-2' type='submit' >Star coding now</button>
      </form>
      <Link to='/login'>Login</Link>
    </main> */}