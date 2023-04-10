// import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';

const useItems = () => {
    const [items, setItems] = useState({});
    const [loading, setLoading] = useState(true);

  

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