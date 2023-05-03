import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTable } from "react-icons/fa";
import InputField from './shared/InputField';
import useAuth from '../Hooks/useAuth';


const ReservationForm = () => {
    const { user } = useAuth();
    const { email } = user;

    const options = [
        '1 person',
        '2 person',
        '3 person',
        '4 person',
        '5 person',
        '6 person',
        '7 person',
        '8 person',
        '9 person',
        '10 person'
    ]

    const [phone, setPhone] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [person, setPerson] = useState('');
    const navigate = useNavigate();


    const handleBooking = event => {
        event.preventDefault();

        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
            image: 'https://spotonwifi.com/wp-content/uploads/2020/08/WordPress-Table-Reservation-plugin-1000x562-1.jpg',
            bookingDate: selectedDate,
            category: 'reservation',
            selectedTime,
            name: `${person} guest`,
            email,
            phone,
            price: 89

        }

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    swal({
                        title: "YAY!",
                        text: "Bookin Successful!",
                        icon: "success",
                    });
                }
                else {
                    console.log('not nice!')
                }
            })


    }
    return (

        <div className=''>
            <form onSubmit={handleBooking} className="rounded-lg" >
                <div className="flex flex-wrap mb-4">
                    <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0 ">

                        <InputField
                            label="date"
                            name="date"
                            type="date"
                            onChange={(e) => setSelectedDate(e.target.value)}
                        />

                    </div>
                    <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0 ">

                        <InputField
                            label="time"
                            name='time'
                            type="time"
                            onChange={(e) => setSelectedTime(e.target.value)}
                        />

                    </div>
                    <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0 ">
                        <label htmlFor='guests'>Guests</label>
                        <select onChange={(e) => setPerson(e.target.value)} name='guests' id='guests' className="form-control border-2 border-gray-200 block w-full rounded-md py-2 px-3 text-gray-700 placeholder-gray-400">
                            <option value='' />
                            {options.map((option, index) => (
                                (index === 0)
                                    ? <option selected key={index} value={index}>{option}</option>
                                    : <option key={index} value={index}>{option}</option>
                            ))}
                        </select>
                    </div>

                    <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0 ">
                        <InputField
                            label="Name"
                            value={user.displayName}
                            type="text"
                            placeholder="Your Name"
                            disabled='true'

                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-4">
                        <InputField
                            label="Phone"
                            name="phone"
                            type="text"
                            placeholder="Phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-4">
                        <InputField
                            label="Email"
                            name='email'
                            type="email"
                            placeholder="Email"
                            value={user.email}
                            disabled='true'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                </div>

                <div className="text-center mt-8 ">
                    <button type='submit' className={"btn4 py-2 px-8 inline-flex items-center"}>
                        Book A Table
                        <FaTable className="ml-2" style={{ verticalAlign: 'middle' }} />
                    </button>
                </div>
            </form >
        </div>
    );
};

export default ReservationForm;