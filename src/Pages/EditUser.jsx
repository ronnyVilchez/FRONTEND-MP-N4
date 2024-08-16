import { useContext } from "react";
//import { infoUser } from "../services/dataUserService"
import { Authcontext } from "../context/AuthContext";
import { Link, useNavigate} from "react-router-dom";


export const EditUser = () => {
  const navigate= useNavigate()
  const { dataUser, edit, options, modal, logout } = useContext(Authcontext)

  async function handleEdit(e) {
    e.preventDefault()
    const dataForm = new FormData(e.target)

    await edit.mutateAsync(dataForm)
  }

  return (
      <main className="relative w-full h-screen p-4 dark:bg-[#252329] dark:text-white ">
        <nav className="absolute flex flex-row justify-between px-8 left-0 right-0">
          <img className="imgMode"  src="/public/images/devchallenges.svg" alt="devchallenges" />

          <section className="flex flex-row gap-2">
            <img className="rounded-lg" src={dataUser?.photo ? `http://localhost:3000/api/user/image/${dataUser.photo}`: '/images/avatar.png'} alt={dataUser?.name} width={32} height={32} />
            <button onClick={options} className="flex flex-row items-center gap-2 font-semibold" >{dataUser?.name}<div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[7px] border-t-black dark:border-t-white"></div>
            </button>

            <section className={`${!modal ? 'hidden' : ''} absolute flex flex-col top-10 right-10 bg-white border-[1px] w-[9rem] p-4 gap-4 rounded-xl dark:bg-[#88868d] text-[#272626]`}>

              <button onClick={()=>{navigate('/dashboard')}}className="bg-white  dark:bg-[#88868d] text-[12px] p-2 hover:bg-[#F2F2F2] rounded-lg flex flex-row gap-2 items-center">
                <img src="/public/images/user.svg" alt="user" /> <span>My Profile</span></button>

              <button className="bg-white dark:bg-[#88868d]  text-[12px] p-2 hover:bg-[#F2F2F2] rounded-lg flex flex-row gap-2 items-center"><img src="/public/images/group.svg" alt="user" />
                <span>Group Chat</span> </button>
              <button onClick={logout} className="bg-white dark:bg-[#88868d]  text-[12px] p-2 hover:bg-[#F2F2F2] rounded-lg flex flex-row gap-2 items-center"><img src="/public/images/logout.svg" alt="user" />
                <span>Logout</span> </button>

            </section>
          </section>
        </nav>
        <section className="flex flex-col sm:w-[65%] h-full mx-auto justify-center">
          <section className="text-star text-[#2D9CDB] pb-4">
            <button>{'<'} <Link to={'/dashboard'}>Back</Link></button>
          </section>

          <section className="sm:border-[1px] rounded-3xl">
            <section className="sm:px-12 px-8 flex flex-row justify-between items-center py-4">
              <div className="flex flex-col">
                <h2 className="font-semibold  text-[1.5rem]">Change info</h2>
                <span>Changes will be reflected to every services</span>
              </div>
            </section>

            <form onSubmit={handleEdit} className='flex flex-col  gap-4 '>

              <figure className="relative sm:px-12 flex flex-row items-center py-4 text-[#828282]">
                <img className="absolute -z-1 sm:left-12 rounded-lg" src={dataUser?.photo ? `http://localhost:3000/api/user/image/${dataUser.photo}`: '/images/avatar.png'} alt={dataUser?.name} width={80} />
                <label className="flex z-0 pl-[1.7rem] flex-row items-center gap-8 cursor-pointer" htmlFor='photo'> <img src="/public/images/camera.svg" alt="camera" /> <span className="font-semibold">CHANGE PHOTO </span></label>
                <input className='hidden' id='photo' name='photo' type="file" />
              </figure>

              <section className="sm:px-12 grid grid-rows items-center">
                <label className="font-semibold" htmlFor='name'> Name: </label>
                <input className='border-[1px] dark:bg-[#252329] px-4 max-w-[26.5rem] h-[3.25rem] border-[#828282] rounded-xl' id='name' placeholder="Enter your name..." name='name' defaultValue={dataUser.name} type="text" required />
              </section>

              <section className="sm:px-12 grid grid-rows ">
                <label className="font-semibold" htmlFor='biography'> Biography: </label>
                <textarea className='flex border-[1px] px-4 py-2 max-w-[26.5rem] h-[5.75rem] border-[#828282] dark:bg-[#252329] rounded-xl' id='biography'  placeholder="Enter your bio..." name='biography' defaultValue={dataUser.biography} type="text" required />
              </section>

              <section className="sm:px-12 grid grid-rows items-center">
                <label className="font-semibold" htmlFor='phone'> Phone: </label>
                <input className='border-[1px] dark:bg-[#252329] px-4 max-w-[26.5rem]  h-[3.25rem] border-[#828282] rounded-xl' id='phone'  placeholder="Enter your phone..." name='phone' defaultValue={dataUser.phone} type="text" required />
              </section>

              <section className="sm:px-12 grid grid-rows items-center">
                <label className="font-semibold" htmlFor='email'> Email: </label>
                <input className='border-[1px] dark:bg-[#252329] px-4 max-w-[26.5rem]  h-[3.25rem] border-[#828282] rounded-xl' id='email'  placeholder="Enter your email..." name='email' defaultValue={dataUser.email} type="email" required />
              </section>

              <section className="sm:px-12 grid grid-rows items-center">
                <label className="font-semibold" htmlFor='password'> Password: </label>
                <input className='border-[1px] dark:bg-[#252329] px-4 max-w-[26.5rem]  h-[3.25rem] border-[#828282] rounded-xl' id='password'  placeholder="Enter your new password..." name='password' defaultValue={dataUser.password} type="password" />
              </section>
              <section className="sm:px-12 pb-8 grid grid-rows items-center" >
              <button className='bg-[#2F80ED] w-[5.2rem] h-[2.5rem] rounded-lg text-white' type='submit' >Save</button>
              </section>
             
            </form>
          </section>
        </section>

      </main>
  )
}
