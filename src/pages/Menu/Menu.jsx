import React, { useEffect, useState } from 'react';
import { Banner } from '../../components/Menu/Banner';
import { Dessert } from '../../components/Menu/Dessert';
import { Offer } from '../../components/Menu/Offer';
import { Pizza } from '../../components/Menu/Pizza';
import { Salad } from '../../components/Menu/Salad';
import { Soup } from '../../components/Menu/Soup';
import './Menu.css'

const Menu = () => {

    const [items, setItems] = useState({});

    useEffect(() => {
        fetch('menu1.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <Banner></Banner>
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