import React from 'react';
import { Helmet } from 'react-helmet';
import Banner2 from '../components/shared/Banner2/Banner2';
import shopData from '../components/Shop/shopData';
import Tabs from '../components/Shop/Tabs';
import { Parallax } from 'react-parallax';
import img1 from '../assets/asset/shop/banner2.jpg'

const Shop = () => {

    return (
        <div>
            <Helmet>
                <title>BB Restaurant |  Shop</title>
            </Helmet>
            <Parallax blur={{ min: -30, max: 30 }} bgImage={img1} bgImageAlt="menu banner" strength={500}>
                <Banner2 banner={{ title: 'Our Shop', description: 'Hey! Would you like to try a dish?' }}></Banner2>
            </Parallax>
            <Tabs shopData={shopData}></Tabs>

        </div>
    );
};

export default Shop;