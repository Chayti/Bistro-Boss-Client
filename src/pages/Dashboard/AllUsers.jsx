import React, { useEffect, useState } from 'react';

const AllUsers = () => {
    // const [orders, setOrders] = useState([]);
   
    // useEffect(() => {
    //     fetch('orders.json')
    //         .then(res => res.json())
    //         .then(data => setOrders(data))
    // }, [orders])
    // console.log(orders)
    const users = [
        {
            "email":"john@gmail.com",
            "name": "John",
            "role": 'user'
        },
        {
            "email":"jane@gmail.com",
            "name": "Jane",
            "role": 'user'
        },
        {
            "email":"john@gmail.com",
            "name": "John",
            "role": 'user'
        },
        {
            "email":"jane@gmail.com",
            "name": "Jane",
            "role": 'user'
        },
        {
            "email":"john@gmail.com",
            "name": "John",
            "role": 'user'
        },
        {
            "email":"jane@gmail.com",
            "name": "Jane",
            "role": 'user'
        }
    ]
    return (
        <div className='w-11/12 p-10 shadow-2xl bg-white rounded-2xl'>
            <h1 className='text-3xl text mb-4 font-bold'>Total users: {users.length}</h1>
           <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                <tr>
                    <th className='bg-[#d1a054] text-white'></th>
                    <th className='bg-[#d1a054] text-white'>Name</th>
                    <th className='bg-[#d1a054] text-white'>Email</th>
                    <th className='bg-[#d1a054] text-white'>Role</th>
                    <th className='bg-[#d1a054] text-white'>Action</th>
                </tr>
                </thead>
                <tbody>
               {
                users.map((user, index)=> <tr key={index}>
                <th>{index+1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><button className='btn bg-[#d1a054] text-white border-0'>Make Admin</button></td>
                <td><button className='btn bg-red-700  text-white border-0'>Remove User</button></td>
              </tr>)
               }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default AllUsers;