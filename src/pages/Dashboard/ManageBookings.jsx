import React from 'react';
import { TiTick } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/shared/Title/Title';

const ManageBookings = () => {
    const navigate = useNavigate();
    const items = [
        {
            "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2017/01/bbq-105x105.jpg",
            "name": "Roast Duck Breast",
            "price": 14.50
        },
        {
            "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2017/01/bbq-105x105.jpg",
            "name": "Tuna Niçoise",
            "price": 14.50
        },
        {
            "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2017/01/bbq-105x105.jpg",
            "name": "Escalope de Veau",
            "price": 14.50
        },
        {
            "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2017/01/bbq-105x105.jpg",
            "name": "Chicken and Walnut Salad",
            "price": 14.50
        },
        {
            "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2017/01/bbq-105x105.jpg",
            "name": "Fish Parmentier",
            "price": 14.50
        },
        {
            "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2017/01/bbq-105x105.jpg",
            "name": "Roasted Pork Belly",
            "price": 14.50
        },


    ]
    return (
        <>
            <div className="w-full">
                <Title type={{ smallHeading: "At a Glance!", title: "Payment history" }}></Title>
            </div>

            <div className='mb-14 w-11/12 p-10 shadow-2xl overflow-y-scroll bg-white rounded-2xl'>

                <h1 className='text-3xl text mb-4 font-bold'>Total items: {items.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='bg-[#d1a054] text-white'>User Email</th>
                                <th className='bg-[#d1a054] text-white'>Phone Number</th>
                                <th className='bg-[#d1a054] text-white'>Booking Date</th>
                                <th className='bg-[#d1a054] text-white'>Booking Time</th>
                                <th className='bg-[#d1a054] text-white'>Activity</th>
                                <th className='bg-[#d1a054] text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((item, index) => <tr key={index}>
                                    <th>{`user${'01' + index}@gmail.com`}</th>
                                    <td>{'01822299900'}</td>
                                    <td>{`${index}+/11/06`}</td>
                                    <td>{`${'0' + index + ' : ' + '0' + index}`}</td>
                                    <td className={`font-bold ${index % 2 == 0 ? 'text-yellow-800' : 'text-green-800'}`}>{index % 2 == 0 ? 'Pending' : 'Done'}</td>
                                    <td><button className={`btn rounded-full ${index % 2 == 0 ? "opacity-50 cursor-not-allowed" : ""} bg-green-700 tooltip text-white border-0' data-tip='done/pending`}><TiTick /></button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ManageBookings;
