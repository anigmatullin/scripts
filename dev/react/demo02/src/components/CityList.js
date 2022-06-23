import React from 'react'

import './CityList.css'

export default function CityList()
{
    const styles = {
        fontSize: '12px',
    };

    const cities = ['Istanbul', 'Moscow', 'London'];
    const cityhtml = cities.map((city, index) => <li key={index}>{city}</li>);

    return (
        <ul className='red' style={styles}>
            {cityhtml}
        </ul>
    )
}
