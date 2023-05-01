import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/shared/Footer/Footer';
import Header from '../components/shared/Header/Header';


const Main = () => {

    const location = useLocation();
    // console.log(location)
    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';

    return (
        <div>
           
            {(!isLoginPage && !isRegisterPage) && <Header />}
            <Outlet />
            {(!isLoginPage && !isRegisterPage) && <Footer />}
           
            
        </div>
    );
};

export default Main;