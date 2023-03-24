import React from 'react';
import useItems from '../../../Hooks/useItems';
import Cards from '../Cards/Cards';
const Soups = () => {
    const [items,,loading] = useItems();
    if(loading){
        return <div>loading...</div>
    }
    console.log(items)
    return (
        <div>
            <div className="grid grid-cols-3 gap-x-2 gap-y-10 mt-10 place-items-center">
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