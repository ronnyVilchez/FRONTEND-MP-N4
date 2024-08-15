import { useContext } from "react";
//import { infoUser } from "../services/DataService"
import { Authcontext } from "../context/AuthContext";
import { Link, Navigate } from "react-router-dom";


export const Dashboard = () => {

    const { dataUser, logout, isLoading, isError,options,modal } = useContext(Authcontext)

    if (isLoading) {
        return <div>Loading info...</div>
    }
    if (isError) {
        return <Navigate to={'/login'} />
    }
  
    return (
        <main className="relative w-full h-screen p-4">
            <nav className="absolute flex flex-row justify-between px-8 left-0 right-0">
                <img src="/public/images/devchallenges.svg" alt="devchallenges" />

                <section className="flex flex-row gap-2">
                    <img  className="rounded-lg" src={dataUser?.photo ? `http://localhost:3000/api/user/image/${dataUser.photo}`: '/images/avatar.png'} width={32} height={32} />
                    <button onClick={options} className="flex flex-row items-center gap-2 font-semibold" >{dataUser?.name}<div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[7px] border-t-black"></div>
                    </button>

                    <section className={`${!modal?'hidden':''} absolute flex flex-col top-10 right-10 bg-white border-2 w-[9rem] p-4 gap-4 rounded-xl `}>

                        <button className="bg-white text-[12px] p-2 hover:bg-[#F2F2F2] rounded-lg flex flex-row gap-2 items-center">
                            <img src="/public/images/user.svg" alt="user" /> <span>My Profile</span></button>

                        <button className="bg-white text-[12px] p-2 hover:bg-[#F2F2F2] rounded-lg flex flex-row gap-2 items-center"><img src="/public/images/group.svg" alt="user" />
                           <span>Group Chat</span> </button>
                        <button onClick={logout} className="bg-white text-[12px] p-2 hover:bg-[#F2F2F2] rounded-lg flex flex-row gap-2 items-center"><img src="/public/images/logout.svg" alt="user" />
                           <span>Logout</span> </button>

                    </section>
                </section>
            </nav>
            <section className="flex flex-col w-[65%] h-full mx-auto justify-center">
                <section className="text-center pb-8">
                    <h1 className="font-semibold text-[2.3rem]">Personal info</h1>
                    <p>Basic info, like your name and photo</p>
                </section>
                <section className="border-2 rounded-3xl">
                    <section className="border-b-2 px-12 flex flex-row justify-between items-center py-4">
                        <div className="flex flex-col">
                            <h2 className="font-semibold  text-[1.5rem]">Profile</h2>
                            <span>Some info may be visible to other people</span>
                        </div>
                        <button className="border-2 rounded-xl h-[2.4rem] w-[6rem]" ><Link className="w-full h-full" to={'/edit'}>Edit</Link> </button>
                    </section>
                    <figure className="border-b-2 px-12 grid grid-cols-[1fr_2fr] items-center py-4">
                        <h2 className="text-[#BDBDBD] text-[16px]">PHOTO</h2>
                        <img className="rounded-lg" src={dataUser?.photo ? `http://localhost:3000/api/user/image/${dataUser.photo}`: '/images/avatar.png'} alt={dataUser?.name} width={72} height={72} />
                    </figure>
                    <section className="border-b-2 px-12 grid grid-cols-[1fr_2fr] items-center py-6">
                        <h2 className="text-[#BDBDBD] text-[16px]">NAME</h2>
                        <h2 className="font-semibold">{dataUser?.name}</h2>
                    </section>
                    <section className="border-b-2 px-12 grid grid-cols-[1fr_2fr] items-center py-6">
                        <h2 className="text-[#BDBDBD] text-[16px]">BIO</h2>
                        <h2 className="font-semibold text-ellipsis overflow-hidden whitespace-nowrap">{dataUser?.biography}</h2>
                    </section>
                    <section className="border-b-2 px-12 grid grid-cols-[1fr_2fr] items-center py-6">
                        <h2 className="text-[#BDBDBD] text-[16px]">PHONE</h2>
                        <h2 className="font-semibold">{dataUser?.phone}</h2>
                    </section>
                    <section className="border-b-2 px-12 grid grid-cols-[1fr_2fr] items-center py-6">
                        <h2 className="text-[#BDBDBD] text-[16px]">EMAIL</h2>
                        <h2 className="font-semibold">{dataUser?.email}</h2>
                    </section>
                    <section className="border-b-2 px-12 grid grid-cols-[1fr_2fr] items-center py-6">
                        <h2 className="text-[#BDBDBD] text-[16px]">PASSWORD</h2>
                        <h2 className="font-semibold">**********</h2>
                    </section>

                </section>
            </section>

        </main>
    )
}
