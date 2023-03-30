import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import profile from '../../assets/others/profile.png'
import { useNavigate } from "react-router-dom";
import './Dashboard.css'
import {  FaPhone, FaRegListAlt, FaStoreAlt } from 'react-icons/fa';
const Dashboard = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
       
        <div className='h-screen bg-authentication pt-10 w-full'>
           <h1 className='text text-3xl md:text-7xl text-center text-animation'>Welcome to the dashboard</h1> 

           <div className='my-10'>
           <img className='border-8 border-white  flex mx-auto rounded-full w-48 mb-10' src={user.photoURL || profile} alt="photoURL" />
           <h3 className='text text-center font-semibold'>{user.displayName || 'No name'}</h3>
           </div>
            <hr className='border-gray-400 mx-5' />

            {/* menu */}
            <div class="grid grid-cols-3 gap-4 my-10 place-items-center">
               
                <div onClick={()=>navigate('/menu')} className="card w-96 bg-primary text-primary-content shadow-2xl cursor-pointer">
                    <div className="card-body mx-auto ">
                        <h1 className='text-7xl mx-auto'><FaRegListAlt/></h1>
                        <h2 className="card-title">OUR MENU</h2>
                       
                    </div>
                </div>
               
                <div onClick={()=>navigate('/shop')} className="card w-96 bg-secondary text-primary-content shadow-2xl cursor-pointer">
               
                <div className="card-body  mx-auto">
                        <h1 className='text-7xl mx-auto'><FaStoreAlt/></h1>
                        <h2 className="card-title">OUR SHOP</h2>
                       
                    </div>
                   
               
                </div>
                <div onClick={()=>navigate('/contact')} className="cursor-pointer card w-96 bg-success text-primary-content shadow-2xl">
                
                <div className="card-body mx-auto">
                        <h1 className='text-7xl mx-auto'><FaPhone/></h1>
                        <h2 className="card-title">CONTACT US</h2>
                       
                    </div>
                   
                
                </div>
            </div>
            </div>
       
       
    );
};

export default Dashboard;