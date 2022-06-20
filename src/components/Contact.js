// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = (props) => {
    return (
        <div className="contact">
            <div className="contact-data">
                <img src={props.data.photo} alt={props.data.name}/>
                <div className="contact-text">
                    <h3>{props.data.name}</h3>
                    <p>{props.data.phone}</p>
                    <p>{props.data.email}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;