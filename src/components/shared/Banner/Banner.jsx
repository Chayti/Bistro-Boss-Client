import React from 'react';
import './Banner.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SliderOne from '../../../assets/asset/home/01.jpg'
import SliderTwo from '../../../assets/asset/home/02.jpg'
import SliderThree from '../../../assets/asset/home/03.png'
import SliderFour from '../../../assets/asset/home/04.jpg'
import SliderFive from '../../../assets/asset/home/05.png'

const Banner = ({ banner }) => {
    return (
        // follow index.css to apply thumbnail customization
        <Carousel autoPlay >
            <div><img src={SliderOne} /></div>
            <div><img src={SliderTwo} /></div>
            <div><img src={SliderThree} /></div>
            <div><img src={SliderFour} /></div>
            <div><img src={SliderFive} /></div>
        </Carousel>
    );
};

export default Banner;