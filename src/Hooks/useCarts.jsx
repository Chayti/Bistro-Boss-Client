// import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import useAuth from './useAuth';

const useCarts = () => {
    const { user } = useAuth()
    const [loading, setLoading] = useState(true);
    const [carts, setCarts] = useState([]);
   
    useEffect(() => {
        fetch(`https://bistro-boss-server.vercel.app/carts?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setCarts(data)
                setLoading(false)
                
            }
            )
    }, [loading])

    return [carts, loading, setCarts];
};

export default useCarts;