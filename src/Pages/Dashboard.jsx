import { useContext } from "react";
//import { infoUser } from "../services/DataService"
import { Authcontext } from "../context/AuthContext";
import { Link } from "react-router-dom";


export const Dashboard = () => {
   
    const { dataUser, logout,isLoading } = useContext(Authcontext)

    if (isLoading) {
        return <div>Loading info...</div>
    }

    return (
        <>
            <Link to={'/edit'}>Edit</Link>
            {
                (dataUser) &&
                <ul>
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
