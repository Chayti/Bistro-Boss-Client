import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../components/shared/Header/Header';

const DashboardLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile bg-dashboard-layout-image">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col items-center justify-center">

          <Outlet></Outlet>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu font-bold text bg-[#d1a054] p-4 w-80 text-base-content dashboard-style">
            <div className='ml-5 mb-10'> <h1 className='text-3xl'>Culinary Cloud</h1>
              <small className='block text-xs font-thin' style={{ letterSpacing: '8px' }}>Restaurant</small>
            </div>

            <li><NavLink to='/reservation'>Reservation</NavLink></li>
            <li><NavLink to='/dashboard/my-orders'>My Orders</NavLink></li>
            <li><NavLink to='/dashboard/history'>My History</NavLink></li>
            <li><NavLink to='/dashboard/all-users'>All Users</NavLink></li>
            <li><NavLink to='/profile'>My Profile</NavLink></li>

          </ul>

        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;