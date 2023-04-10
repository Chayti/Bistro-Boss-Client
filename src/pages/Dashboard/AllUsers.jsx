import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaRegTrashAlt, FaUserCog, } from 'react-icons/fa';
import Title from '../../components/shared/Title/Title';
import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {
   const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                swal({
                    title: "YAY!",
                    text: "Made admin successfully!",
                    icon: "success",
                  });
                
            }
            refetch()
        })
    }

    const handleDeleteItem = id => {
        
            fetch(`http://localhost:5000/users/${id}`, {
             method: 'DELETE', 
               headers: {
                  authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
              })
              .then(res => res.json())
             .then(data => {
              if (data.deletedCount > 0) {
                swal(`Poof! Your item has been deleted!`, {
                icon: "success",
               });
             }
             refetch()
     });
  }
    return (
        <>
            <Helmet>
                <title>BB Restaurant |  All Users</title>
            </Helmet>
            <div className="w-full">
                <Title type={{ smallHeading: "How many??", title: "Manage all users" }}></Title>
            </div>        <div className='mb-14 w-11/12 p-10 shadow-2xl overflow-y-scroll bg-white rounded-2xl'>
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
                                users.map((user, index) => <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{
                                        user.role? 'Admin' 
                                        :
                                        <button onClick={()=>handleMakeAdmin(user._id)} className='btn tooltip bg-[#d1a054] text-white border-0' data-tip='make admin'><FaUserCog /></button>
                                        }</td>
                                    <td><button onClick={() => handleDeleteItem(user._id)} className='btn bg-red-700 tooltip text-white border-0' data-tip='delete'><FaRegTrashAlt /></button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AllUsers;