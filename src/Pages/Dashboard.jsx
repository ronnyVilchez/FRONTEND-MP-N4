import { useContext } from "react";
//import { infoUser } from "../services/DataService"
import { Authcontext } from "../context/AuthContext";
import { Link } from "react-router-dom";


export const Dashboard = () => {

    const { dataUser, logout, isLoading } = useContext(Authcontext)

    if (isLoading) {
        return <div>Loading info...</div>
    }
console.log(dataUser);
    return (
        <>
            <Link to={'/edit'}>Edit</Link>
            {
                (dataUser) &&
                <ul>
                    <img src={`http://localhost:3000/api/user/image/${dataUser?.photo}`} alt={dataUser?.name} width={80}/>

                    <li>name: {dataUser?.name}</li>
                    <li>email: {dataUser?.email}</li>
                    <li>phone: {dataUser?.phone}</li>
                    <li>biography: {dataUser?.biography}</li>
                    {/*   <li>photo: {data?.photo}</li> */}
                </ul>
            }
            <button onClick={logout}>Logout</button>
        </>
    )
}
