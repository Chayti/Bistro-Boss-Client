import React from 'react';
import { useNavigation } from 'react-router';
import useItems from '../../Hooks/useItems';
import Cards from '../shared/Card/Card2';
import Spinner2 from '../shared/Spinner/Spinner2';
const Soups = () => {
    const [items, loading] = useItems();

    if (loading) {
        return <Spinner2></Spinner2>
    }
    console.log(items)
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-x-2 gap-y-10 mt-10 place-items-center">
                {
                    items?.filter(item => item.category.includes('soup'))?.map((item, index) =>
                        <Cards keys={index}>
                            {item}
                        </Cards>
                    )
                }

            </div>
        </div>
    );
};

export default Soups;