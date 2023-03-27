import React from 'react';
import useItems from '../../Hooks/useItems';
import Cards from '../shared/Card/Card2';
const Soups = () => {
    const [items, loading] = useItems();
    if (loading) {
        return <div>loading...</div>
    }
    console.log(items)
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-x-2 gap-y-10 mt-10 place-items-center">
            {
                    items?.offer?.map((item) => 
                    <Cards>
                        {item}
                    </Cards>
                    )
                }

            </div>
        </div>
    );
};

export default Soups;