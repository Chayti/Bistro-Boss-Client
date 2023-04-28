import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import './Header.css'
// https://daisyui.com/components/navbar/
// responsive (dropdown menu on small screen, center menu on large screen)
//fixed
const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <div>
            <div className="header navbar absolute z-10 bg-transparent text-white">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="bg-transparent menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 active-style">
                            <li><NavLink to="/">HOME</NavLink></li>
                            <li><NavLink to="/menu">OUR MENU</NavLink></li>
                            <li><NavLink to="/shop">OUR SHOP</NavLink></li>
                            <li><NavLink to="/contact">CONTACT US</NavLink></li>
                            {user?.uid && <li><NavLink to="/dashboard">DASHBOARD</NavLink></li>}
                            {user?.uid ? (
                                <button
                                    onClick={logOut}
                                >
                                    SIGN OUT
                                </button>
                            ) : (
                                <NavLink to="/login">
                                    SIGN IN
                                </NavLink>
                            )}
                        </ul>
                    </div>
                    <a className="btn btn-ghost  uppercase text-xl font-serif ">
                        <div>
                            Bistro Boss
                            <small className='block text-xs font-thin ml-2' style={{ letterSpacing: '8px' }}>Restaurant</small>
                        </div>
                    </a>
                </div>
                <div className="navbar-end hidden lg:flex px-10">
                    <ul className="menu menu-horizontal px-1 active-style">
                        <li><NavLink to="/">HOME</NavLink></li>
                        <li><NavLink to="/menu">OUR MENU</NavLink></li>
                        <li><NavLink to="/shop">OUR SHOP</NavLink></li>
                        <li><NavLink to="/contact">CONTACT US</NavLink></li>
                        {user?.uid && <li><NavLink to="/dashboard">DASHBOARD</NavLink></li>}
                        {user?.uid ? (
                            <button
                                onClick={logOut}
                            >
                                SIGN OUT
                            </button>
                        ) : (
                            <button><NavLink to="/login">
                                SIGN IN
                            </NavLink></button>
                        )}

                    </ul>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className=" m-1">
                            {user?.uid
                                ? (
                                    <div className="avatar lg:flex lg:items-center">
                                        <div className="w-10 h-10 ml-4 lg:ml-9 lg:mr-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={user?.photoURL || ""} alt="photoURL" />
                                        </div>
                                    </div>
                                )
                                : ""
                            }
                        </label>
                        {/* <ul tabIndex={0} className="active-style dropdown-content menu p-2 shadow rounded-box w-52 border-gray-100 border-2">
                            {user?.uid && <li><NavLink to="/dashboard">Dashboard</NavLink></li>}
                            <li>
                                {user?.uid ? (
                                    <button
                                        onClick={logOut}
                                    >
                                        Sign Out
                                    </button>
                                ) : (
                                    <NavLink to="/login">
                                        Login
                                    </NavLink>
                                )}
                            </li>
                        </ul> */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;