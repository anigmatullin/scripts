import React from 'react'

type ButtonProps = {
    name: string,
    type: string,
}

export default function Button(props: ButtonProps)
{
  return (
    <input type={props.type}  value={props.name} className='btn btn-primary mt-3' />
  )
}
