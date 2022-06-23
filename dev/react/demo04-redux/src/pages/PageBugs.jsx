import React from 'react'
import { useState } from 'react';
import {NavLink, Outlet} from 'react-router-dom'

import * as data from '../store/bugs';

export default function PageBugs()
{
    ////////////////////////////////////////

    const [version, setVersion] = useState(0);

    const unsub = data.store.subscribe(() => {
        setVersion(version + 1);
    });
    
    // React.useEffect(() => {

    //     const unsub = data.store.subscribe(() => {
    //         setVersion(version + 1);
    //     });

    //     return () => {
    //         unsub();
    //     };

    // }, []);

    ////////////////////////////////////////

    return (
    <div className=''>
      
    <ul className='menu'>
        <li><span className='menu-name'>Bugs:</span></li>
        <li><NavLink to="/bugs/">List</NavLink></li>
        <li><NavLink to="/bugs/new">Create</NavLink></li>

        <span className='notes'>Count: {data.getCount()}</span>
        <span className='notes'>Filtered: {data.getFilteredCount()}</span>
    </ul>

    <div className=''>
    <Outlet />
    </div>

    </div>
  )
}
