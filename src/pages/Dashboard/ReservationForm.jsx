import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';

import InputField from '../../components/shared/InputField';
import Title from '../../components/shared/Title/Title';


const ReservationForm = () => {

    const options=[
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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const navigate = useNavigate();
    console.log(selectedTime)
    return (
        <div className=''>
          
            <form className="rounded-lg" >
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
                            name="time"
                            type="time"
                            onChange={(e) => setSelectedTime(e.target.value)}
                        />
                       
                    </div>
                    <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0 ">
                    <label htmlFor='guests'>Guests</label>
                    <select name='guests' id='guests' className="form-control border-2 border-gray-200 block w-full rounded-md py-2 px-3 text-gray-700 placeholder-gray-400">
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
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            
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
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                   
                </div>
              
                <div className="text-center mt-8">
                    <button onClick={(e)=>
                        {e.preventDefault() 
                        navigate('/dashboard/payment')}} className={"btn4 py-2 px-8 "}>
                        Book A Table
                    </button>
                </div>
            </form >
        </div>
    );
};

export default ReservationForm;