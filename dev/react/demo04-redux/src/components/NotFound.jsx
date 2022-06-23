import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        Page Not Found
        <NavLink className='p-3 m-3' to="/">Home</NavLink>
    </div>
  )
}
