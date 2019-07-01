import React, {useReducer} from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENTt,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER
}from '../types';

const ContactState = props => {
    const initialState = {
        contacts:[
            {
                id:0,
                name: 'Hannah',
                email:'hannah@gmail.com',
                phone:'111-111-1111',
                type:'personal'
            },
            {
                id:1,
                name: 'grace',
                email:'Grace@gmail.com',
                phone:'111-111-2222',
                type:'personal'
            },
            {
                id:2,
                name: 'Hudson',
                email:'hudson@gmail.com',
                phone:'111-111-3333',
                type:'professional'
            }
        ]
    };

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    //Add contact

    //Delete contact

    //Set current contact

    //Clear current contact

    // Update contact

    //Filter contact

    //Clear filter
 
    return (

        <ContactContext.Provider
        value = {{
            contacts: state.contacts
        }}
        >
          {props.children}
        </ContactContext.Provider>
    )
}


export default ContactState;