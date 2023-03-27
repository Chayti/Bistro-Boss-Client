import React from 'react';
import './Banner.css'
const Banner = ({banner}) => {
    return (
        <div className="text-center text-white flex relative top-0 justify-center items-center min-h-[700px] bg-home-image">
           <div className='text-style'> 
           <h1 className=' uppercase text-7xl '>{banner.title}</h1>
           <small className='text-lg'>{banner.description}</small>
           </div>
        </div>
            

    );
};

export default Banner;