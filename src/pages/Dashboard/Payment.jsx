import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';

import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51KDCwXHsUlB2Uq2855r2Lk24SnqFjg4GSPtaLfjqV4sjQgFhBD4k3fBCJck8BHz5xZRP7t2bvigmVBcGeh3a5h2L00KyjNA7g7');

const Payment = () => {
    // const booking = useLoaderData();
    // // const navigation = useNavigation();
    // const { treatment, price, appointmentDate, slot } = booking;
    // if(navigation.state === "loading"){
    //     return <Loading></Loading>
    // }
    return (
        <div className='w-full h-full mt-48'>
            <h3 className="text-7xl text-center text-animation">Payment</h3>
            {/* <p className="text-xl">Please pay <strong>$14.50</strong> for your appointment on {appointmentDate} at {slot}</p> */}
            <div className='w-6/12 my-20 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;