import React from 'react';
import { useState, useEffect } from 'react';


const exceptedformValues = { fullName:'', phoneNumber:''};

function Form( { contactsList, contactsBefore } ) {

    const [input, setInputChange] = useState(exceptedformValues);

    const onChangeInput = (e) =>{
        setInputChange({...input, [e.target.name] : e.target.value })
    };

    useEffect(() => {
        setInputChange(exceptedformValues);
    }, [contactsBefore])

    const onSubmit = (e) =>{
        e.preventDefault();

        if(input.fullName === '' || input.phoneNumber === ''){
            alert("Fill the form")
            return false;
        }

        contactsList([...contactsBefore, input]);

        
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input name="fullName" placeholder='Full Name' value={input.fullName} onChange={onChangeInput}></input>    
            </div>  
            <div>
                <input name="phoneNumber" placeholder='Phone Number' value={input.phoneNumber} onChange={onChangeInput}></input>   
            </div> 
            <button>Add to Contacts</button>
        </form>
        
    )
}

export default Form
