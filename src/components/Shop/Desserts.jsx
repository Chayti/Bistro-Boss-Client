import React from 'react';
import useItems from '../../Hooks/useItems';
import Cards from '../shared/Card/Card2';
import Spinner from '../shared/Spinner/Spinner';

const Desserts = () => {
    const [items, loading] = useItems();
    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-x-2 gap-y-10 mt-10 place-items-center">
            {
                    items?.dessert?.map((item, index) => 
                    <Cards keys={index}>
                        {item}
                    </Cards>
                    )
                }

            </div>
        </div>
    );
};

export default Desserts;