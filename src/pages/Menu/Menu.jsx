import React, { useEffect, useState } from 'react';
import { Dessert } from '../../components/Menu/Dessert';
import { Offer } from '../../components/Menu/Offer';
import { Pizza } from '../../components/Menu/Pizza';
import { Salad } from '../../components/Menu/Salad';
import { Soup } from '../../components/Menu/Soup';
import Banner2 from '../../components/shared/Banner2/Banner2';


const Menu = () => {

    const [items, setItems] = useState({});

    useEffect(() => {
        fetch('menu1.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <Banner2 banner = {{title: 'Our Menu', description:'Would you like to try a dish?', image:'bg-menu-banner'}}></Banner2>
            <div>
                {items && <Offer items={items.offer}></Offer>}
                {items && <Dessert items={items.dessert}></Dessert>}
                {items && <Pizza items={items.pizza}></Pizza>}
                {items && <Salad items={items.salad}></Salad>}
                {items && <Soup items={items.soup}></Soup>}
            </div>
        </div>
    );
};

export default Menu;