import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/parthpanara911')
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data);
    //         });
    // }, []);
    return (
        <div className="text-center m-4 bg-gray-600 text-white text-3xl p-4">Github followers: {data.followers}
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/parthpanara911')
    return response.json()
}
