import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Header.css'
// https://daisyui.com/components/navbar/
// responsive (dropdown menu on small screen, center menu on large screen)

const Header = () => {

    return (
        <div>
            <div className="header navbar  absolute z-10 bg-transparent text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost  uppercase text-xl font-serif ">
                        <div>
                            Culinary Cloud

                            <small className='block text-xs font-thin' style={{ letterSpacing: '8px' }}>Restaurant</small>
                        </div>
                    </a>
                </div>
                <div className="navbar-end px-10">
                    <ul className="menu menu-horizontal  px-1">
                        <li><NavLink to="/">HOME</NavLink></li>
                        <li><NavLink to="/menu">OUR MENU</NavLink></li>
                        <li tabIndex={0}>
                            <a>
                                SHOP
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>RESERVATION</a></li>
                        <li><a>CONTACT US</a></li>

                    </ul>
                    <a ><FaShoppingBag /></a>
                </div>
            </div>
        </div>
    );
};

export default Header;