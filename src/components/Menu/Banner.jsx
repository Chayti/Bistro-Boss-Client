import React from 'react';
import './Menu.css';

export function Banner() {


    return (
        <div className="container-lg">
            <div className="top-banner bg-img flex justify-center items-center">
                <div className='section text-style text-white flex justify-center items-center font-bold'>
                    <div className="text-center">
                        <h1 className='uppercase text-7xl '>Our Menu</h1>
                        <br />
                        <small className='text-lg'>Would you like to try a dish?</small>
                    </div>
                </div>
            </div>
        </div>
    );
}