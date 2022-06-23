import React from 'react'
import { useParams } from 'react-router'

export default function ContactUpdate(props)
{
    const params = useParams();
    const id = params.id;

    return <div>Update Contact {id}</div>
}
