// import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useBookings = () => {
    const {user} = useAuth()
    const [loading, setLoading] = useState(true);
    const [bookings, setBookings] = useState([]);

        useEffect(() => {
            fetch(`http://localhost:5000/bookings?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setBookings(data)
                    setLoading(false)
                }
                )
        }, [])
       
   

  
    return [bookings, loading];
};

export default useBookings;