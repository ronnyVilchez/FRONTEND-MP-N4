import { useContext } from "react";
//import { infoUser } from "../services/dataUserService"
import { Authcontext } from "../context/AuthContext";
import { Link } from "react-router-dom";


export const EditUser = () => {
  const { dataUser, edit } = useContext(Authcontext)

  async function handleEdit(e) {
    e.preventDefault()
    const dataForm = new FormData(e.target)

    await edit.mutateAsync(dataForm)
  }

  return (
    <>
      <Link to={'/dashboard'}>Back</Link>
      {
        (dataUser) && <>
          <form onSubmit={handleEdit} className='flex flex-col gap-4 w-[30%] px-10'>

            <div className="">
            <img src={`http://localhost:3000/api/user/image/${dataUser?.photo}`} alt={dataUser?.name} width={80}/>
              <label htmlFor='photo'> Photo: </label>
              <input className='border-2' id='photo' name='photo' type="file" />
            </div>

            <label htmlFor='name'> Name: </label>
            <input className='border-2' id='name' name='name' defaultValue={dataUser.name} type="name" required />

            <label htmlFor='biography'> Biography: </label>
            <input className='border-2' id='biography' name='biography' defaultValue={dataUser.biography} type="biography" required />

            <label htmlFor='phone'> Phone: </label>
            <input className='border-2' id='phone' name='phone' defaultValue={dataUser.phone} type="phone" required />

            <label htmlFor='email'> Email: </label>
            <input className='border-2' id='email' name='email' defaultValue={dataUser.email} type="email" required />

            <label htmlFor='password'> Password: </label>
            <input className='border-2' id='password' name='password' defaultValue={dataUser.password} type="password" />

            <button className='border-2' type='submit' >Save</button>
          </form>

        </>
      }
      <Link to={'/login'}>Logout</Link>
    </>
  )
}
