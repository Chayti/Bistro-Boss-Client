import React from 'react';
import About from '../components/Home/About';

import Category from '../components/Home/Category'
import CallUs from '../components/Home/CallUs';
import ChefRecommends from '../components/Home/ChefRecommends';
import LatestNews from '../components/Home/LatestNews';
import Menu from '../components/Home/Menu';
import Testimonials from '../components/Home/Testimonials';
import Banner from '../components/shared/Banner/Banner';




const Home = () => {
    return (
        <div >

            <Banner banner={{ title: 'Culinary Cloud', description: 'ABC Main Street, Uni 21, Bangladesh' }}></Banner>
            <Category></Category>
            <About></About>
            <Menu></Menu>
            <CallUs></CallUs>
            <ChefRecommends></ChefRecommends>
            <LatestNews></LatestNews>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;