import React from 'react';
import About from '../../components/Home/About/About';
import Banner from '../../components/Home/Banner/Banner';
import CallUs from '../../components/Home/CallUs/CallUs';
import ChefRecommends from '../../components/Home/ChefReccommends/ChefRecommends';
import LatestNews from '../../components/Home/LatestNews/LatestNews';
import Menu from '../../components/Home/Menu/Menu';
import Testimonials from '../../components/Home/Testimonials/Testimonials';




const Home = () => {
    return (
        <div >
           
          <Banner></Banner>
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