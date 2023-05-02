import React from 'react';
import { Helmet } from 'react-helmet';
import Title from '../../components/shared/Title/Title';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    const { user } = useAuth();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/payments?email=${user.email}`);
            const data = await res.json();
            return data;
        }
    });
    return (
        <>
            <Helmet>
                <title>BB Restaurant |  Payment History</title>
            </Helmet>
            <div className="w-full">
                <Title type={{ smallHeading: "At a Glance!", title: "Payment history" }}></Title>
            </div>

            <div className='mb-14 w-11/12 p-10 shadow-2xl overflow-y-scroll bg-white rounded-2xl'>

                <h1 className='text-3xl text mb-4 font-bold'>Total Payments: {payments.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>

                                <th className='bg-[#d1a054] text-white'>Email</th>
                                <th className='bg-[#d1a054] text-white'>Category</th>
                                <th className='bg-[#d1a054] text-white'>Total Price</th>
                                <th className='bg-[#d1a054] text-white'>Payment Date</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((payment, index) => <tr key={index}>

                                    <td>{payment.email}</td>
                                    <td>{payment.category}</td>
                                    <td>${payment.total}</td>
                                    <td>{payment.date}</td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default PaymentHistory;
