import React from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from '../components/Contact/ContactForm';
import ContactLocation from '../components/Contact/ContactLocation';
import Banner2 from '../components/shared/Banner2/Banner2';
import Title from '../components/shared/Title/Title';
import { Parallax } from 'react-parallax';
import img1 from '../assets/asset/contact/banner.jpg'

const Contact = () => {

    return (
        <div>
            <Helmet>
                <title>BB Restaurant |  Contact Us</title>
            </Helmet>

            <Parallax blur={{ min: -30, max: 30 }} bgImage={img1} bgImageAlt="menu banner" strength={500}>
                <Banner2 banner={{ title: 'CONTACT US', description: `Do you wanna connect with us?` }}></Banner2>
            </Parallax>

            <Title type={{ smallHeading: "Visit Us", title: "OUR LOCATION", border: 'black' }}></Title>
            <ContactLocation></ContactLocation>

            <Title type={{ smallHeading: "Send Us a Message", title: "CONTACT FORM", border: 'black' }}></Title>
            <ContactForm></ContactForm>
        </div>
    )
}

export default Contact;
