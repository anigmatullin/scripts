import React from 'react'

export default function Login(props)
{
    function handleLogin(e)
    {
        e.preventDefault();
        
        const user = e.target.user.value;
        props.handleLogin(user);
    }

    return (
    <div className='container mt-5'>

        <div className="row">

            <div className="col-1">
            </div>

            <div className="col-8">

    <form onSubmit={handleLogin}>

        <div className="form-group mb-3">
            <label>User:</label>
            <input type="text" className="form-control" name="user" id="user" />
        </div>

        <div className="form-group mb-3">
            <label>Pass:</label>
            <input type="password"  className="form-control" name="pass" id="pass" />
        </div>
        
        <button type='submit' className='btn btn-primary mb-3'>Login</button>

    </form>

            </div>
        </div>

    </div>
    )
}
