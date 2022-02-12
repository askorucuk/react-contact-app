import React from 'react'
import { useState, useEffect } from 'react'


import Form from './Form'
import List from './List'

function Contacts() {

    const [contacts, setContacts] = useState([]);

    useEffect(()=>{
        console.log(contacts)
    },[contacts])

    return (
        <div className='App container' >
            <List contacts={contacts}  />
            <Form contactsList={setContacts} contactsBefore={contacts} />
        </div>
    )
}

export default Contacts

