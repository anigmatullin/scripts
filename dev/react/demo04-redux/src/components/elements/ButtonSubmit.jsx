import React from 'react'

export default function ButtonSubmit(props)
{
  return (
    <div className='form-group mt-3'>
    <button type="submit" className='btn btn-success'>{props.name}</button>
    </div>
  )
}
