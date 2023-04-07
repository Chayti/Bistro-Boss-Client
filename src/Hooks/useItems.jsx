// import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';

const useItems = () => {
    const [items, setItems] = useState({});
    const [loading, setLoading] = useState(true);

    // const {data: items = [], refetch} = useQuery({
    //     queryKey: ['items'],
    //     queryFn: async() =>{
    //         const res = await fetch('http://localhost:5000/items');
    //         const data = await res.json();
    //         return data;
    //     }
    // });

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setLoading(false)
            }
            )
    }, [])

    return [items, loading,setItems];
};

export default useItems;