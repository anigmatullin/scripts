import React from 'react'

type ElementProps = {
    name: string;
}

export default function ButtonSubmit(props: ElementProps)
{
    return (
        <button type='submit' className='btn btn-primary mt-3 mb-3'>{props.name}</button>
    )
}
