import React from 'react';
import { Helmet } from 'react-helmet';
import notFound from '../assets/404.gif';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NotFound = () => {

    return (
        <div className="text-center w-11/12 h-screen">
            <Helmet>
                <title>CC Restaurant | 404 </title>
            </Helmet>

            <div className="flex justify-center">
                <img src={notFound} alt="404" />
            </div>

            <Link to='/'>
                <button className={`btn4 inline-flex items-center py-2 px-8`}>
                    Back to Home
                    <FaHome className="ml-2" style={{ verticalAlign: 'middle' }} />
                </button>
            </Link>

        </div>
    )
}

export default NotFound;
