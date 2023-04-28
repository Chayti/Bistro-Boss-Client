import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from '@tanstack/react-query';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/shared/Title/Title';
import useAuth from '../../Hooks/useAuth';
import useCarts from '../../Hooks/useCarts';
import Spinner2 from '../../components/shared/Spinner/Spinner2';

const MyCart = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [carts, loading, setCarts] = useCarts();

    if (loading) {
        return <Spinner2></Spinner2>
    }

    const handleDeleteItem = cart => {
        const id = cart._id
        fetch(`https://bistro-boss-server.vercel.app/carts/${cart.email}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    swal(`Poof! Your item has been deleted!`, {
                        icon: "success",
                    });
                }
                const remaining = carts?.filter((cart) => cart._id !== id);
                setCarts(remaining)
            });
    }


    const handlePayment = () => {

        navigate('/dashboard/payment', { state: { total: total, category: 'Food Order' } })

    }

   
    const total = carts? carts?.reduce((acc, order) => acc + order.price, 0):0;
  
    console.log(carts)
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

                    <h1 >Total orders: {carts.length}</h1><h1>Total Price: ${total}</h1> <button onClick={handlePayment} className='btn bg-[#d1a054] py-2 border-0 px-5'>Pay</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='bg-[#d1a054] text-white'></th>
                                <th className='bg-[#d1a054] text-white'>Item Image</th>
                                <th className='bg-[#d1a054] text-white'>Item Name</th>
                                <th className='bg-[#d1a054] text-white'>Category</th>
                                <th className='bg-[#d1a054] text-white'>Price</th>
                                <th className='bg-[#d1a054] text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carts?.map((cart, index) => <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td><img className='h-14' src={cart.image} alt="" /></td>
                                    <td>{cart.name}</td>
                                    <td>{cart.category}</td>
                                    <td>${parseFloat(cart.price).toFixed(2)}</td>

                                    <td><button className='btn bg-red-700 tooltip text-white border-0' data onClick={() => handleDeleteItem(cart)}><FaRegTrashAlt /></button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </>
    );
}

export default MyCart;
// className='btn bg-red-700 tooltip text-white border-0' data-tip='delete'