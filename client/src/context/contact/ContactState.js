import React, {useReducer} from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
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
                name: 'Grace',
                email:'grace@gmail.com',
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
        ],
        current: null
    };

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    //Add contact
    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({type: ADD_CONTACT, payload: contact})
    }

    //Delete contact
    const deleteContact = id => {
        dispatch({type: DELETE_CONTACT, payload: id})
    }
    //Set current contact
    const setCurrent = contact => {
        dispatch({type: SET_CURRENT, payload: contact})
    }
    //Clear current contact
    const clearCurrent = ()=> {
        dispatch({type: CLEAR_CURRENT})
    }
    // Update contact

    //Filter contact

    //Clear filter
 
    return (

        <ContactContext.Provider
        value = {{
            contacts: state.contacts,
            current: state.current,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent
        }}
        >
          {props.children}
        </ContactContext.Provider>
    )
}


export default ContactState;