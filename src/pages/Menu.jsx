import React from 'react';
import { Helmet } from 'react-helmet';
import Dessert from '../components/Menu/Dessert';
import Offer from '../components/Menu/Offer';
import Pizza from '../components/Menu/Pizza';
import Salad from '../components/Menu/Salad';
import Soup from '../components/Menu/Soup';
import Banner2 from '../components/shared/Banner2/Banner2';
import Spinner2 from '../components/shared/Spinner/Spinner2';
import useItems from '../Hooks/useItems';
import { Parallax } from 'react-parallax';
import img1 from '../assets/asset/menu/Banner3.jpg'

const Menu = () => {

    const [items, loading] = useItems();
    if (loading) {
        return <Spinner2></Spinner2>
    }

    return (
        <div>
            <Helmet>
                <title>BB Restaurant |  Menu</title>
            </Helmet>

            {/* <Banner2 banner={{ title: 'Our Menu', description: 'Would you like to try a dish?', image: 'bg-menu-banner' }}></Banner2> */}

            <Parallax blur={{ min: -30, max: 30 }} bgImage={img1} bgImageAlt="menu banner" strength={500}>
                <Banner2 banner={{ title: 'Our Menu', description: 'Would you like to try a dish?' }}></Banner2>
            </Parallax>

            <div>
                {items && <Offer items={items}></Offer>}
                {items && <Dessert items={items}></Dessert>}
                {items && <Pizza items={items}></Pizza>}
                {items && <Salad items={items}></Salad>}
                {items && <Soup items={items}></Soup>}
            </div>


        </div>
    );
};

export default Menu;