import React from 'react'
import { createContext, useContext, useState } from 'react'

const ContactsContext = createContext();

function useContactsContext()
{
    return useContext(ContactsContext);
}

function ContactsProvider(props)
{
    const children = props.children;

    const [contacts, setContacts] = useState([
        {
            "id": 1,
            "name": "Aibulat",
            "mail": "nigmatullin@gmail.com"
        }
    ]);

    function add(contact)
    {
        setContacts(prev => {
            return [...prev, contact];
        })
    }

    return (
        <ContactsContext.Provider value={{contacts, add}}>
            {children}
        </ContactsContext.Provider>
        )
}

export {ContactsProvider, useContactsContext};
