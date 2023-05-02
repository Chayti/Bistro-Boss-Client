// import { useState, useEffect } from 'react';

// const useOrders = () => {
//     const [loading, setLoading] = useState(true);
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         fetch(`http://localhost:5000/orders`)
//             .then(res => res.json())
//             .then(data => {
//                 setOrders(data)
//                 setLoading(false)
//             }
//             )
//     }, [])

//     return [orders, loading, setOrders];
// };

// export default useOrders;