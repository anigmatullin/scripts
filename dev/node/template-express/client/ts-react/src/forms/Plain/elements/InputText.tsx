import React from 'react'

type PropsType = {
    errors: string,
    label: string,
    name: string,
    type: string,
}

export default function InputText(props: PropsType)
{
  return (
    <div className='form-group mt-3'>
                
    <label>{props.label}:</label>
    
    <input
        className='form-control'
        type={props.type}
        name={props.name}
        id={props.name}
    />

    <div className='text-danger'>{props.errors}</div>
    </div>
  )
}
