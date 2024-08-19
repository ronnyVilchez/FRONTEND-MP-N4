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
    

<main className='flex sm:w-full h-screen sm:h-screen justify-center items-center dark:bg-[#252329] dark:text-white'>
      
        <section className='flex flex-col gap-4 sm:border-[1px] p-8 rounded-3xl ' >
          <figure className='px-6'>
            <img className='imgMode' src={"/images/devchallenges.svg"} alt="devchallenges" />
          </figure>
          <h2 className='w-[20rem] text-[18px] pl-6 font-semibold'>Join thousands of learnens from around the world</h2>
          <h2 className='w-[20rem] text-[14.5px] pl-6'>Master web development by making real-life projects.There are multiple paths for you to choose </h2>

          <form onSubmit={handleRegister} className='flex flex-col gap-4 w-full px-6'>

            <section className='flex flex-row min-w-[20rem] min-h-[3rem] gap-4 pl-4 pr-6 items-center border-[1px] rounded-md'>
              <img src="/images/mail.svg" alt="mail" />
              <input className='w-full outline-none dark:bg-[#252329]' placeholder='Email' id='email' name='email' type="email" required />
            </section>

            <section className='flex flex-row  min-w-[20rem] min-h-[3rem] gap-4 pl-4 pr-6 items-center border-[1px] rounded-md'>
              <img src="/images/lock.svg" alt="lock" />
              <input className='w-full outline-none dark:bg-[#252329]' placeholder='Password' id='password' name='password' type="password"  pattern="(?=.*[A-Z]).{8,}" title="Ingrese al menos 8 caracteres y una letra mayúscula" required />
            </section>

            <button className='bg-[#2F80ED]  font-semibold text-center  text-white rounded-md  min-w-[20rem] min-h-[2.5rem]' type='submit' >Star coding now</button>
          </form>
          <section className='flex flex-col gap-4 items-center'>
            <h3 className='text-[#828282]'>or continue with these social profile</h3>

            <figure className='flex flex-row gap-4'>
              <img src="/images/Google.svg" alt="Google" />
              <img src="/images/Facebook.svg" alt="Facebook" />
              <img src="/images/Twitter.svg" alt="Twitter" />
              <img src="/images/Gihub.svg" alt="Gihub" />
            </figure>
            <h3 className='text-[#828282]'>Adready a member? <Link className='text-[#47A9E0]' to='/login'>Login</Link> </h3>
          </section>
        </section>
      
    </main>






  )
}
