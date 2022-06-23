import React from 'react';
import {useState} from 'react';
import {useParams, useNavigate} from 'react-router';
import {Link} from 'react-router-dom'
import ContactsSearch from './ContactsSearch';

import * as data from '../../store/contacts';


export default function ContactsList(props)
{
    const [version, setVersion] = useState(0);

    data.store.subscribe(() => {
        setVersion(version + 1);
    });

    const rows = data.getFilteredContacts();

    ////////////////////////////////////////

    const params = useParams();
    const id = params.id;

    const tblContacts = rows.map(item => {
        return (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.mail}</td>
            <td>
                <a className="action" onClick={() => data.remove(item.id)}>Delete</a>
                &nbsp; | &nbsp;
                <Link className="action" to={`/contacts/update/${item.id}`}>Edit</Link>
            </td>
        </tr>
        )
    })

    if (id) {
        return <div>Contact Details for: {id}</div>
    }
    else {
        return  <div>
        <ContactsSearch />
        <table className='table table-bordered border-primary'>
            <thead className='data'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Mail</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
            {tblContacts}
            </tbody>
        </table>
        </div>
    }
}
