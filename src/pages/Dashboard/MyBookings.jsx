import React from 'react';
import { Helmet } from 'react-helmet';
import Title from '../../components/shared/Title/Title';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { FaRegTrashAlt } from 'react-icons/fa';
import useBookings from '../../Hooks/useBookings';
import Spinner2 from '../../components/shared/Spinner/Spinner2';

const MyBookings = () => {
    const navigate = useNavigate();
    // const {user} = useAuth();
    // const {data: bookings = [], refetch} = useQuery({
    //     queryKey: ['bookings'],
    //     queryFn: async() =>{
    //         const res = await fetch(`http://localhost:5000/bookings?email=${user.email}`);
    //         const data = await res.json();
    //         return data;
    //     }
    // });
    const [bookings,loading] = useBookings();

    if(loading){
        return <Spinner2></Spinner2>
    }
    const total = bookings.reduce((acc, order) => acc + order.price, 0);
    console.log(bookings)
    return (
   
            <>
            <Helmet>
                <title>BB Restaurant |  My Bookings</title>
            </Helmet>
            <div className="w-full">
                <Title type={{ smallHeading: "Excelent Ambience", title: "My Bookings" }}></Title>
            </div>
            <div className='mb-14 w-11/12 p-10 shadow-2xl overflow-y-scroll bg-white rounded-2xl'>

                <div className='flex justify-between items-center text-3xl text mb-4 font-bold'>

                    <h1 >Total bookings: {bookings.length}</h1><h1>Total Price: ${total}</h1> <button onClick={() => navigate('/dashboard/payment',{state:{total:total, category:'Reservation'}})} className='btn bg-[#d1a054] py-2 border-0 px-5'>Pay</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='bg-[#d1a054] text-white'></th>
                                <th className='bg-[#d1a054] text-white'> Image</th>
                                <th className='bg-[#d1a054] text-white'>Guests Number</th>
                                <th className='bg-[#d1a054] text-white'>Category</th>
                                <th className='bg-[#d1a054] text-white'>Price</th>
                                <th className='bg-[#d1a054] text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((booking, index) => <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td><img className='h-14' src={booking.image} alt="" /></td>
                                    <td>{booking.name}</td>
                                    <td>{booking.category}</td>
                                    <td>${parseFloat(booking.price).toFixed(2)}</td>

                                    <td><button className='btn bg-red-700 tooltip text-white border-0' data onClick={() => handleDeleteItem(booking)}><FaRegTrashAlt /></button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </>
      
    );
};

export default MyBookings;