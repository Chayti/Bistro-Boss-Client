import React from 'react';
import './Banner2.css'
const Banner2 = ({ banner }) => {
    return (
        <div className="container-lg">
            <div className='bg-img flex justify-center items-center'>
                <div className='section text-style text-white flex justify-center items-center font-bold'>
                    <div className="text-center">
                        <h2 className='uppercase text-7xl text-animation'>{banner.title}</h2>
                        <br />
                        <small className='text-lg'>{banner.description}</small>
                    </div>
                </div>
            </div>
            {/* <div className={`${banner.image} bg-img flex justify-center items-center`}>
                <div className='section text-style text-white flex justify-center items-center font-bold'>
                    <div className="text-center">
                        <h2 className='uppercase text-7xl text-animation'>{banner.title}</h2>
                        <br />
                        <small className='text-lg'>{banner.description}</small>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Banner2;