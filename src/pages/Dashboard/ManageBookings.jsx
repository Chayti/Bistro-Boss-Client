import React from 'react';
import { Helmet } from 'react-helmet';
import { TiTick } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/shared/Title/Title';
import { useQuery } from '@tanstack/react-query';

const ManageBookings = () => {
    const navigate = useNavigate();
     const {data: bookings = [], refetch} = useQuery({
        queryKey: ['bookings'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/bookings');
            const data = await res.json();
            return data;
        }
    });

    const handleApproval = (id)=>{
       
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                'content-type': 'application/json',
                }
            
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    swal({
                        title: "Yahhh!!! ❤️😍",
                        text: "Item Updated",
                        icon: "success",
                    })

                  
                }
                refetch()
            })

    };
    
    return (
        <>
            <Helmet>
                <title>BB Restaurant |  Manage Bookings</title>
            </Helmet>
            <div className="w-full">
                <Title type={{ smallHeading: "At a Glance!", title: "Manage all bookings" }}></Title>
            </div>

            <div className='mb-14 w-11/12 p-10 shadow-2xl overflow-y-scroll bg-white rounded-2xl'>

                <h1 className='text-3xl text mb-4 font-bold'>Total bookings: {bookings.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='bg-[#d1a054] text-white'>User Email</th>
                                <th className='bg-[#d1a054] text-white'>Phone Number</th>
                                <th className='bg-[#d1a054] text-white'>Booking Date</th>
                                <th className='bg-[#d1a054] text-white'>Booking Time</th>
                                <th className='bg-[#d1a054] text-white'>Category</th>
                                <th className='bg-[#d1a054] text-white'>Price</th>
                                <th className='bg-[#d1a054] text-white'>Status</th>
                                <th className='bg-[#d1a054] text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((booking, index) => <tr key={index}>
                                    <th>{booking.email}</th>
                                    <td>{booking.phone}</td>
                                    <td>{booking.bookingDate}</td>
                                    <td>{booking.selectedTime}</td>
                                    <td>{booking.category}</td>
                                    <td>{booking.price}</td>
                                    <td className={`font-bold ${index % 2 == 0 ? 'text-yellow-800' : 'text-green-800'}`}>{booking.status? 'Approved' : 'Pending'}</td>
                                    <td><button onClick={()=>handleApproval(booking._id)} className={`btn rounded-full ${booking.status ? "opacity-50 cursor-not-allowed" : ""} bg-green-700 tooltip text-white border-0' data-tip='done/pending`}><TiTick /></button></td>
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
