import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Header.css'
// https://daisyui.com/components/navbar/
// responsive (dropdown menu on small screen, center menu on large screen)

const Header = () => {
    const activeStyle = {
        background: 'lightgray',
        color: 'black'
      };
    return (
        <div>
            <div className="header navbar absolute z-10 bg-transparent text-white">
                <div className="navbar-start">
                    <a className="btn btn-ghost  uppercase text-xl font-serif ">
                        <div>
                            Culinary Cloud

                            <small className='block text-xs font-thin' style={{ letterSpacing: '8px' }}>Restaurant</small>
                        </div>
                    </a>
                </div>
                <div className="navbar-end px-10">
                    <ul className="menu menu-horizontal px-1 active-style">
                        <li><NavLink  to="/">HOME</NavLink></li>
                        <li><NavLink to="/menu">OUR MENU</NavLink></li>
                        <li tabIndex={0}>
                        <NavLink to="/shop">OUR SHOP</NavLink>
                        </li>
                        <li><NavLink to="/reservation">RESERVATION</NavLink></li>
                        <li><NavLink to="/contact">CONTACT US</NavLink></li>

                    </ul>
                    <a ><FaShoppingBag /></a>
                </div>
            </div>
        </div>
    );
};

export default Header;