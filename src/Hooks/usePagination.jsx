import React, { useEffect, useState } from 'react';

const usePagination = (category) => {
  
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const size = 6;
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const url = `http://localhost:5000/items?page=${page}&size=${size}&category=${category}`;
        
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCount(data.count);
                setItems(data.products);
                setLoading(false)
            })
    }, [ page, size])
    return [items, count, page, size, setPage, loading];
};

export default usePagination;