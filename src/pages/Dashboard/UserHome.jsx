import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../contexts/AuthProvider';
import profile from '../../assets/others/profile.png'
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaCartPlus, FaCcAmazonPay, FaPhone, FaRegListAlt, FaRegStar, FaStoreAlt } from 'react-icons/fa';
import Card4 from '../../components/shared/Card/Card4';
const UserHome = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  console.log(user)
  return (

    <div className='h-screen  pt-10 w-full'>
      <Helmet>
        <title>CC Restaurant | User Home</title>
      </Helmet>
      <h2 className="text-center text text-animation p-4 text-3xl normal-case">Hi, Welcome Back!</h2>
      <div class="flex flex-wrap justify-center">
        <Card4 icon={<FaRegListAlt size={32} />}>{{ title: "MENU", data: 103, color1: 'from-[#b82bf6]', color2: 'to-[#f0c0ee]' }}</Card4>
        <Card4 icon={<FaStoreAlt size={32} />}>{{ title: "SHOP", data: 103, color1: 'from-[#d1a054]', color2: 'to-[#ffe1a4]' }}</Card4>
        <Card4 icon={<FaPhone size={32} />}>{{ title: "CONTACT", data: '03', color1: 'from-[#ff4079]', color2: 'to-[#f6b7e0]' }}</Card4>


      </div>
      <div className="flex w-9/12 mx-auto flex-wrap h-96 justify-center mt-12  shadow-2xl">
        <div class=" bg-orange-100 w-full flex items-center justify-center sm:w-1/2 md:w-1/2 pr-4 mb-4 ">
          <div>
            <img className='rounded-full mb-8 mx-auto w-52' src={user.photoURL || profile} alt="user-profile" />
            <h3 className='text-center text font-extrabold text-animation text-xl'>{user.displayName || ''}</h3>
          </div>
        </div>
        <div class=" bg-yellow-100  h-full text font-extrabold flex justify-center items-center w-full sm:w-1/2 md:w-1/2 px-4 mb-4">
          <div>
            <h3 className='text-animation text-3xl mb-5 '>---Your Activities---</h3>
            <ul className='w-full text-2xl'>
              <li className='flex items-center text-[#0088FE]'><FaCartPlus className=' mr-2' /> Orders: 6</li>
              <li className='flex items-center text-[#00C49F]'><FaRegStar className=' mr-2' /> Reviews: 2</li>
              <li className='flex items-center text-[#FFBB28]'><FaCalendarAlt className=' mr-2' /> Bookings: 1</li>
              <li className='flex items-center text-[#FF8042] '><FaCcAmazonPay className='mr-2' /> Payment: 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>


  );
};

export default UserHome;