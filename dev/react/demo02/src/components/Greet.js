import React from "react";


export function Greet(props)
{
    console.log(props);
    return <div>
    <h3>Hello, {props.name}!</h3>
    {props.children}
    </div>
}
