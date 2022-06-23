import React from 'react'

export default function Name(props)
{
    let name = "Istanbul";
    return (
        <div onClick={() => props.cb(name)}>{props.name}</div>
    )
}
