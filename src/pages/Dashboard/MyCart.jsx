import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from '@tanstack/react-query';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/shared/Title/Title';

const MyCart = () => {
    const navigate = useNavigate();

    const {data: carts = [], refetch} = useQuery({
        queryKey: ['carts'],
        queryFn: async() =>{
            const res = await fetch("http://localhost:5000/carts");
            const data = await res.json();
            return data;
        }
    });
    
    const total = carts.reduce((acc, order) => acc + order.price, 0);
    console.log(total)
    return (

        <>
            <Helmet>
                <title>BB Restaurant |  My Cart</title>
            </Helmet>
            <div className="w-full">
                <Title type={{ smallHeading: "My Cart", title: "Wanna add more?" }}></Title>
            </div>
            <div className='mb-14 w-11/12 p-10 shadow-2xl overflow-y-scroll bg-white rounded-2xl'>

                <div className='flex justify-between items-center text-3xl text mb-4 font-bold'>

                    <h1 >Total orders: {carts.length}</h1><h1>Total Price: ${total}</h1> <button onClick={() => navigate('/dashboard/payment')} className='btn bg-[#d1a054] py-2 border-0 px-5'>Pay</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='bg-[#d1a054] text-white'></th>
                                <th className='bg-[#d1a054] text-white'>Item Image</th>
                                <th className='bg-[#d1a054] text-white'>Item Name</th>
                                <th className='bg-[#d1a054] text-white'>Price</th>
                                <th className='bg-[#d1a054] text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carts.map((cart, index) => <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td><img className='h-14' src={cart.image} alt="" /></td>
                                    <td>{cart.name}</td>
                                    <td>${parseFloat(cart.price).toFixed(2)}</td>

                                    <td><button onClick={() => swal({
                                        title: "Are you sure?",
                                        text: "Message sent",
                                        icon: "error",
                                    })} className='btn bg-red-700 tooltip text-white border-0' data-tip='delete'><FaRegTrashAlt /></button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </>
    );
};

export default MyCart;