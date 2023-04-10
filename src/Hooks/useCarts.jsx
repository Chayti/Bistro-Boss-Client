// import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useCarts = () => {
    const {user} = useAuth()
    const [loading, setLoading] = useState(true);
    const [carts, setCarts] = useState([]);
    console.log(carts)
        useEffect(() => {
            fetch(`http://localhost:5000/carts?email=${user.email}`,{
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
        }, [])
    
    return [carts, loading,setCarts];
};

export default useCarts;