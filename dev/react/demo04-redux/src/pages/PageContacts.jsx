import React from 'react'
import {useState} from 'react';
import {NavLink, Outlet} from 'react-router-dom'

import * as data from '../store/contacts';


export default function PageContacts()
{
    const [version, setVersion] = useState(0);

    data.store.subscribe(() => {
        setVersion(version + 1);
    });

    return (
    <div className=''>
      
    <ul className='menu'>
        <li><span className='menu-name'>Contacts:</span></li>
        <li><NavLink to="/contacts/">List</NavLink></li>
        <li><NavLink to="/contacts/new">Create</NavLink></li>

        <span className='notes'>Count: {data.getCount()}</span>
        <span className='notes'>Filtered: {data.getFilteredCount()}</span>
    </ul>

    <div className=''>
        <Outlet />
    </div>

    </div>
  )
}
