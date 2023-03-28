import React, { useEffect, useState } from 'react';

const AllUsers = () => {
    // const [orders, setOrders] = useState([]);
   
    // useEffect(() => {
    //     fetch('orders.json')
    //         .then(res => res.json())
    //         .then(data => setOrders(data))
    // }, [orders])
    // console.log(orders)
    const orders = [
        {
            "id":"104M",
            "name": "Roast Duck Breast",
            "price": 14.50
        },
        {
            "id":"101T",
            "name": "Tuna Niçoise",
            "price": 14.50
        },
        {
            "id":"100E",
            "name": "Escalope de Veau",
            "price": 14.50
        },
        {
            "id":"100A",
            "name": "Chicken and Walnut Salad",
            "price": 14.50
        },
        {
            "id":"102B",
            "name": "Fish Parmentier",
            "price": 14.50
        },
        {
            "id":"103C",
            "name": "Roasted Pork Belly",
            "price": 14.50
        }
    ]
    return (
        <div className='w-11/12'>
           <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                <tr>
                <th className='bg-[#d1a054] text-white'></th>
                    <th className='bg-[#d1a054] text-white'>Order ID</th>
                    <th className='bg-[#d1a054] text-white'>Name</th>
                    <th className='bg-[#d1a054] text-white'>Price</th>
                </tr>
                </thead>
                <tbody>
               {
                orders.map((order, index)=> <tr key={index}>
                <th>{index+1}</th>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.price}</td>
              </tr>)
               }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default AllUsers;