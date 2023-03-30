import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContactLocation from '../../components/Contact/ContactLocation';
import Title from '../../components/shared/Title/Title';
import ReservationForm from './ReservationForm';

const Reservation = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-white'>
            <div className='h-48'>

            </div>
            <div className=" p-6">

                <Title type={{ smallHeading: "Reservation", title: "Book A Table", border: 'black' }}></Title>
                <ReservationForm></ReservationForm>
                <Title type={{ smallHeading: "Visit Us", title: "OUR LOCATION", border: 'black' }}></Title>
                <div className=' flex mx-auto'>
                    <ContactLocation></ContactLocation>
                </div>

            </div>
        </div>
    );
};

export default Reservation;