import React from 'react';
import { Helmet } from 'react-helmet';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const stripePromise = loadStripe('pk_test_51KDCwXHsUlB2Uq2855r2Lk24SnqFjg4GSPtaLfjqV4sjQgFhBD4k3fBCJck8BHz5xZRP7t2bvigmVBcGeh3a5h2L00KyjNA7g7');

const Payment = () => {
    const date = new Date();
    const now = new Date(); // create a new Date object with the current date and time

    const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Dhaka'
    };

    const formattedDate = now.toLocaleDateString('en-US', options);


    console.log(date)
    const location = useLocation();
    const {user} = useAuth();
    console.log(user)
    const order = {total:location.state.total,name:user.displayName, email:user.email, formattedDate:formattedDate}
 
    return (
        <>
            <Helmet>
                <title>BB Restaurant |  Payment</title>
            </Helmet>
            <h3 className="text-7xl mt-18 text-center text-animation text">Payment</h3>
            <div className='w-9/12 rounded-xl  mt-14'>

                <p className="text-xl text-center mb-10">Please pay <strong>${location.state.total}</strong> for your order</p>
                <div className='w-6/12 mt-5 mx-auto '>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                        order={order}
                        />
                    </Elements>
                </div>
            </div>
        </>
    );
};

export default Payment;