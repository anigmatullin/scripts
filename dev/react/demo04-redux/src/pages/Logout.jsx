import React from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';

export default function Logout()
{
    const[auth, setAuth] = useAuth();
    const navigate = useNavigate();

    function handleLogout(e)
    {
        setAuth(null);
        navigate("/");
    }

    return (
    <div>
    <h3>Confirm Logout?</h3>
    <form onSubmit={handleLogout}>
        <button type='submit' className='btn btn-primary'>Logout</button>
    </form>
    </div>
    )
}
