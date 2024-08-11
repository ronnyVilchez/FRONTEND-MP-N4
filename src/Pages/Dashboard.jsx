import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Dashboard = () => {
    const [datos, setDatos] = useState({})

    const data = async () => {
        const info = await axios.get('http://localhost:3000/api/user/2')
        console.log(info.data);
        setDatos(info.data);

    }
    useEffect(() => {
        data()

    }, [])


    return (
        <>
            {
                (datos) &&
                <ul>
                    <li>{datos.name}</li>
                    <li>{datos.email}</li>
                    <li>{datos.phone}</li>
                    <li>{datos.biography}</li>
                    <li>{datos.phono}</li>
                </ul>
            }
        </>
    )
}
