import React from 'react';
import { Helmet } from 'react-helmet';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/shared/Title/Title';

const PaymentHistory = () => {
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
            <Helmet>
                <title>CC Restaurant | Payment History</title>
            </Helmet>
            <div className="w-full">
                <Title type={{ smallHeading: "At a Glance!", title: "Payment history" }}></Title>
            </div>

            <div className='mb-14 w-11/12 p-10 shadow-2xl overflow-y-scroll bg-white rounded-2xl'>

                <h1 className='text-3xl text mb-4 font-bold'>Total Payments: {items.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='bg-[#d1a054] text-white'>Payment Id</th>
                                <th className='bg-[#d1a054] text-white'>Payment Name</th>
                                <th className='bg-[#d1a054] text-white'>Price</th>
                                <th className='bg-[#d1a054] text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((item, index) => <tr key={index}>
                                    <th>{index + "103y4Q9h33L" + index}</th>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td><button className='btn bg-red-700 tooltip text-white border-0' data-tip='delete'><FaRegTrashAlt /></button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default PaymentHistory;
