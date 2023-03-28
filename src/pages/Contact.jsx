import React from 'react';
import ContactForm from '../components/Contact/ContactForm';
import ContactLocation from '../components/Contact/ContactLocation';
import Banner2 from '../components/shared/Banner2/Banner2';
import Title from '../components/shared/Title/Title';

const Contact = () => {

    return (
        <div>

            <Banner2 banner={{ title: 'CONTACT US', description: `Do you wanna connect with us?`, image: 'bg-contact-banner' }}></Banner2>

            <Title type={{ smallHeading: "Visit Us", title: "OUR LOCATION", border: 'black' }}></Title>
            <ContactLocation></ContactLocation>

            <Title type={{ smallHeading: "Send Us a Message", title: "CONTACT FORM", border: 'black' }}></Title>
            <ContactForm></ContactForm>
        </div>
    )
}

export default Contact;
