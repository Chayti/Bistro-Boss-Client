import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../shared/Card/Card';

// import './Menu.css' -------> No need to use this css. we are using react-parallax

import { Parallax } from 'react-parallax';
import img1 from '../../assets/asset/menu/salad-bg.jpg'
import Banner2 from '../shared/Banner2/Banner2';

const Salad = ({ items }) => {
    // console.log(items)

    const salad = items.filter(item => item.category.includes('salad'));

    return (
        <>
            {/* <div className="container-lg my-20">
                <div className="salad-banner bg-fixed bg-img2 flex justify-center items-center">
                    <div className='section2 text-style text-white flex justify-center items-center font-bold'>
                        <div className="text-center">
                            <h1 className='uppercase text-7xl '>SALADS</h1>
                            <br />
                            <small className='text-lg'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</small>
                        </div>
                    </div>
                </div>
            </div> */}

            <Parallax className="my-16" blur={{ min: -30, max: 30 }} bgImage={img1} strength={200} smooth>
                <Banner2 banner={{ title: 'SALADS', description: 'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' }}></Banner2>
            </Parallax>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-10">
                {
                    salad?.map((item, index) =>
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

export default Salad;