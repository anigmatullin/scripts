import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      
      <header>
        <NavLink className='p-3 m-3' to="/">Home</NavLink>
        <NavLink className='p-3 m-3' to="/about">About</NavLink>
        <NavLink className='p-3 m-3' to="/contacts/list">Contacts</NavLink>
        <NavLink className='p-3 m-3' to="/contacts/create">Create</NavLink>
        <NavLink className='p-3 m-3' to="/logout">Logout</NavLink>
      </header>

      <Outlet></Outlet>

    </div>
  )
}
