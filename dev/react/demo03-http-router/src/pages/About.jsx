import React from 'react'
import { useNavigate } from 'react-router';
import {useProfileInfo} from '../context/ProfileContext'

export default function About(props)
{
    const {profile, update} = useProfileInfo();
    const navigate = useNavigate();
    console.log(profile);

    function handleClick()
    {
        update("root", "root@example.com");   
    }

    return (
    <div>
        About: {profile.user}
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={handleClick}>Logout</button>
        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={() => navigate(+1)}>Fwd</button>
    </div>
    )
}
