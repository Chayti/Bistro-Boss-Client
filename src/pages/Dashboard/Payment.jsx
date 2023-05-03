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


    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Asia/Dhaka'
    };

    const formattedDate = date.toLocaleDateString('en-US', options);


    const location = useLocation();
    const { user } = useAuth();
    const order = { total: location.state.couponPrice, coupon: location.state.coupon, name: user.displayName, email: user.email, formattedDate: formattedDate, category: location.state.category }
    return (
        <>
            <Helmet>
                <title>BB Restaurant |  Payment</title>
            </Helmet>
            <h3 className="text-7xl mt-18 text-center text-animation text">Payment</h3>
            <div className='w-9/12 rounded-xl  mt-14'>

                <p className="text-xl text-center mb-10">Please pay <strong>${location.state.couponPrice}</strong> for your order</p>
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