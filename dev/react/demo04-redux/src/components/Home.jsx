import React from 'react'
import {useAuth} from '../context/AuthContext';

export default function Home(props)
{
    const [auth, setAuth] = useAuth();
    return (
    <div className=''>
        Home for {auth}
        <ul>
            <li>Contacts</li>
            <li>Bugs</li>
        </ul>
    </div>
    )
}
