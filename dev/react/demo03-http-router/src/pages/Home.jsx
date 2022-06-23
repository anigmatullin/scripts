import React from 'react'
import {useAuth} from '../context/AuthContext';

export default function Home(props)
{
    const [auth, setAuth] = useAuth();
    return <div>Home for {auth}</div>
}
