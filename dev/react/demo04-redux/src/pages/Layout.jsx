import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      
      <header>
        <NavLink className='p-3 m-3' to="/">Home</NavLink>
        <NavLink className='p-3 m-3' to="/contacts">Contacts</NavLink>
        <NavLink className='p-3 m-3' to="/bugs">Bugs</NavLink>
        <NavLink className='p-3 m-3' to="/logout">Logout</NavLink>
      </header>

    <div className="container">
      <Outlet></Outlet>
    </div>
      

    </div>
  )
}
