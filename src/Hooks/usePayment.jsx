import { useState, useEffect } from 'react';

const usePayment = () => {
    const [loading, setLoading] = useState(true);
    const [revenue, setRevenue] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/allPayments`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setRevenue(data.reduce((acc, curr) => acc + curr.total, 0).toFixed(2))
                setLoading(false)
            }
            )
    }, [])

    return [revenue, loading, setRevenue];
};

export default usePayment;