import React from 'react'
import { useState } from 'react'


function List( {contacts} ) {

    const [filterValue, setfilterValue] = useState(' ');

    const filteredValues = contacts.filter((item) =>{
        return Object.keys(item).some((key) => 
            item[key].toString().toLowerCase().includes(
                filterValue.toLocaleLowerCase()
            )
        )
    })

    const eventSetFilter = (e) =>{
        setfilterValue(e.target.value);
    };

    return (
        <div>
            <input placeholder='Filter' value={filterValue} onChange={eventSetFilter}></input>
            <ul>
                {
                    filteredValues.map((item, key) => (
                        <li key={key}>{item.fullName} - {item.phoneNumber}</li>
                    ))
                }
            </ul>

            <span>{filteredValues.length}</span>
        </div>
    )
}

export default List
