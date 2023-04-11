// import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useBookings = () => {
    const { user } = useAuth()
    const [loading, setLoading] = useState(true);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch(`https://bistro-boss-server.vercel.app/bookings?email=${user.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setBookings(data)
                setLoading(false)
            }
            )
    }, [])




    return [bookings, loading, setBookings];
};

export default useBookings;