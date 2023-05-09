import React from 'react';
import './Banner.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SliderOne from '../../../assets/asset/home/01.jpg'
import SliderTwo from '../../../assets/asset/home/02.jpg'
import SliderThree from '../../../assets/asset/home/03.jpg'
import SliderFour from '../../../assets/asset/home/04.jpg'
import SliderFive from '../../../assets/asset/home/05.jpg'

const Banner = ({ banner }) => {
    return (
        <Carousel autoPlay >
                <div>
                    <img src={SliderOne} />
                   
                </div>
                <div>
                    <img src={SliderTwo} />
                  
                </div>
                <div>
                    <img src={SliderThree}/>
                    
                    
                </div>
                <div>
                    <img src={SliderFour}/>
                    
                    
                </div>
                <div>
                    <img src={SliderFive}/>
                    
                    
                </div>
            </Carousel>
        //     <div className="text-center text-white flex relative top-0 justify-center items-center h-[100vh] bg-home-image">
        //     <div className='text-style'>
            
        //         <h1 className=' uppercase text-7xl '>{banner.title}</h1>
        //         <small className='text-lg'>{banner.description}</small>
        //     </div>
        // </div>


    );
};

export default Banner;