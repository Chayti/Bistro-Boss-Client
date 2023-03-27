import React from 'react';
import Salad from './Salad'
import Pizza from './Pizza';
import Soups from './Soups'
import Desserts from './Desserts';
import Drinks from './Drinks'

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