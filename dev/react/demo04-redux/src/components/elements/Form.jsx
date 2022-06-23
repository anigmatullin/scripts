import React from 'react'

export default function Form(props)
{
  return (

    <div className=''>
    <h3>{props.name}</h3>

    <form autoComplete='off' onSubmit={props.onsubmit}>
        {props.children}
    </form>

    </div>
  )
}
