import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const MyCart = () => {
    

    // const {data: orders = [], refetch} = useQuery({
    //     queryKey: ['orders'],
    //     queryFn: async() =>{
    //         const res = await fetch("orders.json");
    //         const data = await res.json();
    //         return data;
    //     }
    // });
    const orders =  [
        {
            "image":"https://cristianonew.ukrdevs.com/wp-content/uploads/2017/01/bbq-105x105.jpg",
            "name": "Roast Duck Breast",
            "price": 14.50
        },
        {
            "image":"https://cristianonew.ukrdevs.com/wp-content/uploads/2017/01/bbq-105x105.jpg",
            "name": "Tuna Niçoise",
            "price": 14.50
        },
        {
            "image":"https://cristianonew.ukrdevs.com/wp-content/uploads/2017/01/bbq-105x105.jpg",
            "name": "Escalope de Veau",
            "price": 14.50
        },
        {
            "image":"https://cristianonew.ukrdevs.com/wp-content/uploads/2017/01/bbq-105x105.jpg",
            "name": "Chicken and Walnut Salad",
            "price": 14.50
        },
        {
            "image":"https://cristianonew.ukrdevs.com/wp-content/uploads/2017/01/bbq-105x105.jpg",
            "name": "Fish Parmentier",
            "price": 14.50
        },
        {
            "image":"https://cristianonew.ukrdevs.com/wp-content/uploads/2017/01/bbq-105x105.jpg",
            "name": "Roasted Pork Belly",
            "price": 14.50
        },
 
        
    ]
    
    return (
        <div className='w-11/12 p-10 shadow-2xl bg-white rounded-2xl'>
           
        <h1 className='text-3xl text mb-4 font-bold'>Total users: {orders.length}</h1>
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
                <th className='bg-[#d1a054] text-white'>Action</th>
            </tr>
            </thead>
            <tbody>
           {
            orders.map((order, index)=> <tr key={index}>
            <th>{index+1}</th>
            <td><img className='h-14' src={order.image} alt="" /></td>
            <td>{order.name}</td>
            <td>${order.price}</td>
            <td><button className='btn bg-[#d1a054] text-white border-0'>Update Item</button></td>
            <td><button className='btn bg-red-700  text-white border-0'>Remove Item</button></td>
          </tr>)
           }
            </tbody>
        </table>
        </div>
    </div>
    );
};

export default MyCart;