import React from 'react';
import Salad from '../../Shop/Salad/Salad'
import Pizza from '../../Shop/Pizza/Pizza';
import Soups from '../../Shop/Soups/Soups'
import Desserts from '../../Shop/Desserts/Desserts';
import Drinks from '../../Shop/Drinks/Drinks'

const shopData = [
    {
        label: 'SALAD',
        content: <Salad></Salad>
    },
    {
        label: 'PIZZA',
        content: <Pizza></Pizza>
    },
    {
        label: 'SOUPS',
        content: <Soups></Soups>
    },
    {
        label: 'DESSERTS',
        content: <Desserts></Desserts>
    },
    {
        label: 'DRINKS',
        content: <Drinks></Drinks>
    },
]
export default shopData;