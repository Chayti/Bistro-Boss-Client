import {useState, useEffect} from 'react';

const useItems= ()=>{
    const [items, setItems] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('menu3.json')
            .then(res => res.json())
            .then(data => 
                {
                    setItems(data)
                    setLoading(false)
                }
            )
    }, [items])

    return [items, setItems,loading];
};

export default useItems;