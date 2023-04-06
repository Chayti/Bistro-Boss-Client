import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBars, FaBook, FaCalendarAlt, FaCcAmazonPay, FaCreditCard, FaEnvelope, FaHome, FaRocket, FaShoppingBag, FaShoppingCart, FaTasks, FaUsers, FaUtensils } from 'react-icons/fa';

const DashboardLayout = () => {
  return (
    <div>
      <div className="drawer drawer-mobile bg-white">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col items-center justify-center">
          <div className='h-24 lg:hidden'>

          </div>
          <label htmlFor="my-drawer-2" className="btn w-full mt-5 rounded-none drawer-button lg:hidden bg-[#d1a054] text-black text font-extrabold">Open dashboard</label>
          <Outlet></Outlet>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu font-bold text bg-[#d1a054] p-4 w-80 text-base-content dashboard-style">
            <div className='ml-5 mb-10'> <h1 className='text-3xl'>Bistro Boss</h1>
              <small className='block text-xs font-thin ml-1' style={{ letterSpacing: '8px' }}>Restaurant</small>
            </div>

            <li><NavLink to='/dashboard/admin-home'><FaHome size={20} />Admin Home</NavLink></li>
            <li><NavLink to='/dashboard/addItem'><FaUtensils size={20} />Add Item</NavLink></li>
            <li><NavLink to='/dashboard/manageItems'><FaTasks size={20} />Manage Items</NavLink></li>
            <li><NavLink to='/dashboard/manageBookings'><FaBook size={20} />Manage Bookings</NavLink></li>
            <li><NavLink to='/dashboard/allUsers'><FaUsers size={20} />All Users</NavLink></li>

            <hr />
            <li><NavLink to='/dashboard/user-home'><FaHome size={20} />User Home</NavLink></li>
            <li><NavLink to='/dashboard/reservation'><FaCalendarAlt size={20} />Reservation</NavLink></li>
            <li><NavLink to='/dashboard/paymentHistory'><FaCcAmazonPay size={20} />Payment History</NavLink></li>
            <li><NavLink to='/dashboard/mycart'><FaShoppingCart size={20} />My Cart</NavLink></li>
            <li><NavLink to='/dashboard/mybookings'><FaUsers size={20} />My Bookings</NavLink></li>
            <li><NavLink to='/dashboard/addReview'><FaRocket size={20} />Add Review</NavLink></li>
            

            <hr />
            <li><NavLink to='/'><FaHome size={20} />Home</NavLink></li>
            <li><NavLink to='/menu'><FaBars size={20} />Menu</NavLink></li>
            <li><NavLink to='/shop'><FaShoppingBag size={20} />Shop</NavLink></li>
            <li><NavLink to='/contact'><FaEnvelope size={20} />Contact</NavLink></li>

          </ul>

        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;