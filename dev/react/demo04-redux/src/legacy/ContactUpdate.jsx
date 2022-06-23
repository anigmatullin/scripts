import React, {useState} from 'react';
import {useParams} from 'react-router';
import {useNavigate} from 'react-router-dom';
import * as data from '../store/contacts';


export default function ContactUpdate(props)
{
    const nav = useNavigate();
    const params = useParams();
    const id = params.id;
    const obj = data.getContact(id);

    ////////////////////////////////////////

    const [version, setVersion] = useState(0);

    data.store.subscribe(() => {
        setVersion(version + 1);
    });

    const state = data.store.getState();

    ////////////////////////////////////////

    const [name, setName] = useState(obj.name);
    const [mail, setMail] = useState(obj.mail);

    const onSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        data.update(id, name, mail);
        nav("/contacts");
    }

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updateMail = (e) => {
        setMail(e.target.value);
    }

    return (
        <div className=''>
            <h3>Update Contact</h3>
            <form autoComplete='off' onSubmit={onSubmit}>

            <div className='form-group mt-3'>
                <label>Name</label>
                <input value={name} onChange={updateName} className='form-control' type="text" name="name" />
            </div>

            <div className='form-group mt-3'>
                <label>Mail</label>
                <input value={mail} onChange={updateMail} className='form-control' type="email" name="mail" />
            </div>

            <div className='form-group mt-3'>
                <button type="submit" className='btn btn-success'>Update</button>
            </div>
                
            </form>

        </div>
    )
}
