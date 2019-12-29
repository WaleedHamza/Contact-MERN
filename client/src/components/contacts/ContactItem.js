import React, {useContext} from 'react'
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext'

const ContactItem = ({contact}) => {
    const contactContext = useContext(ContactContext)
    const {deleteContact, setCurrent, clearCurrent} = contactContext;

    const {id, name, email, phone, type} = contact;

    const onDelete = () =>{
        deleteContact(id);
        clearCurrent();
    }
    return (
        <div className='card'>
            <span style={{fontSize: '3rem', color:'white'}}><i className="fas fa-user-circle" style= {{float: 'left'}}></i> </span>
            <h3 className='text-primary text-left'> 
                {name}{' '}
                
            </h3>
            <span
                style= {{float: 'right'}}
                    className={'badge ' +
                    (type === 'professional' ? 'badge-success' : 'badge-primary')}
                    >
                    {type.charAt(0).toUpperCase()+ type.slice(1)}
                </span>
            <ul className='list'>
                {email && (<li>
                    <i className='fas fa-envelope-open'></i> {email}
                </li>)}
                {phone && (<li>
                    <i className='fas fa-phone'></i> {phone}
                </li>)}
            </ul>
            <p>
                <button className='btn btn-dark btn-sm' onClick={()=> setCurrent(contact)}>Edit</button>
                <button className='btn btn-danger btn-sm' onClick={onDelete}>Delete</button>
            </p>
        </div>
    )
}

ContactItem.propTypes= {
    contact: PropTypes.object.isRequired
};


export default ContactItem;
