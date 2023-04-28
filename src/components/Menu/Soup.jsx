import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../shared/Card/Card';

// import './Menu.css' -------> No need to use this css. we are using react-parallax

import { Parallax } from 'react-parallax';
import img1 from '../../assets/asset/menu/soup-bg.jpg'
import Banner2 from '../shared/Banner2/Banner2';

const Soup = ({ items }) => {
    // console.log(items)

    const soup = items.filter(item => item.category.includes('soup'));

    return (
        <>
            {/* <div className="container-lg my-20">
                <div className="soup-banner bg-fixed bg-img2 flex justify-center items-center">
                    <div className='section2 text-style text-white flex justify-center items-center font-bold'>
                        <div className="text-center">
                            <h1 className='uppercase text-7xl '>SOUPS</h1>
                            <br />
                            <small className='text-lg'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</small>
                        </div>
                    </div>
                </div>
            </div> */}

            <Parallax className="my-16" blur={{ min: -30, max: 30 }} bgImage={img1} strength={500}>
                <Banner2 banner={{ title: 'SOUPS', description: 'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' }}></Banner2>
            </Parallax>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-10">
                {
                    soup?.map((item, index) =>
                        <div className="flex space-x-4" key={index}>
                            <Card>
                                {item}
                            </Card>
                        </div>
                    )
                }
            </div>

            <div className="flex justify-center mt-10">
                <Link to="/shop"><button className="btn btn-outline uppercase border-0 px-14 border-b-4 ">Order Your favourite items</button></Link>
            </div>
        </>
    );
};

export default Soup;