import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {Link, useSearchParams} from 'react-router-dom'
import {useContactsContext} from '../context/ContactsContext';

export default function ContactCreate()
{
    const [searchParams, setSearchParams] =  useSearchParams();
    const ctxContacts = useContactsContext();
    const theQuery = searchParams.get('q');

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const query = form.search.value;
        setSearchParams({q: query});

        console.log(form.name.value);
        console.log(form.mail.value);
        
        const contact = {
            id: uuidv4(),
            name: name,
            mail: mail,
        }

        console.log(contact);
        ctxContacts.add(contact);

        setName("");
        setMail("");
    }

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updateMail = (e) => {
        setMail(e.target.value);
    }

    return (
        <div className='container'>
            <h3>Contact Create</h3>
            <form autoComplete='off' onSubmit={onSubmit}>

            <div className='form-group mt-3'>
                <label>
                    Search
                    <input className='form-control' type="search" name="search" />
                </label>
            </div>

            <div className='form-group mt-3'>
                <label>Name</label>
                <input value={name} onChange={updateName} className='form-control' type="text" name="name" />
            </div>

            <div className='form-group mt-3'>
                <label>Mail</label>
                <input value={mail} onChange={updateMail} className='form-control' type="email" name="mail" />
            </div>

            <div className='form-group mt-3'>
                <button type="submit" className='btn btn-success'>Save</button>
            </div>
                
            </form>

            <h3>{theQuery}</h3>
        </div>
    )
}
