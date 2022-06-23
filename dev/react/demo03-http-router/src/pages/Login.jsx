import React from 'react'

export default function Login(props)
{
    function handleLogin(e)
    {
        const user = e.target.user.value;
        props.handleLogin(user);
    }

    return (
    <div>
    <h3>Login</h3>
    <form onSubmit={handleLogin}>
        <input type="text" name="user" id="user" />
        <input type="password" name="pass" id="pass" />
        <button type='submit'>Login</button>
    </form>
    </div>
    )
}
