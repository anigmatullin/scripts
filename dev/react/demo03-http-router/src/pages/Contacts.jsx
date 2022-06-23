import React from 'react'
import {useParams} from 'react-router'
import {useProfileInfo} from '../context/ProfileContext'
import {useContactsContext} from '../context/ContactsContext';

export default function Contacts(props)
{
    const context = useProfileInfo();
    const ctxContacts = useContactsContext();

    const params = useParams();
    const id = params.id;

    const tblContacts = ctxContacts.contacts.map(contact => {
        return <li key={contact.id}>{contact.name}</li>
    })

    console.log(ctxContacts.contacts);
    console.log(tblContacts);

    if (id) {
        return <div>Contact {id}</div>
    }
    else {
        return <div>
            Contacts List for {context.profile.user}
            <ul>
                {tblContacts}
            </ul>
        </div>
    }
}
