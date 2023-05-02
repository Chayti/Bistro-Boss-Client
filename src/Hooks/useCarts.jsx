// import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useCarts = () => {
    const { user } = useAuth()



    const { data: carts = [], isLoading, refetch } = useQuery({
        queryKey: ['carts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();

            return data;

        },
        // refetchInterval: 1,

    });

    return [carts, isLoading, refetch];
};

export default useCarts;