// import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import useAuth from './useAuth';

const useReviews = () => {
    const { user } = useAuth()
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    console.log(reviews)
    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setLoading(false)

            }
            )
    }, [])

    return [reviews, loading, setReviews];
};

export default useReviews;