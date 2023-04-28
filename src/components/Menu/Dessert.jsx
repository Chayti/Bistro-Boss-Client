import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../shared/Card/Card';
import './Menu.css'
const Dessert = ({ items }) => {
    // console.log(items)

    const dessert = items.filter(item => item.category.includes('dessert'));

    return (
        <>
            <div className="container-lg my-20">
                <div className="dessert-banner bg-fixed bg-img2 flex justify-center items-center">
                    <div className='section2 text-style text-white flex justify-center items-center font-bold'>
                        <div className="text-center">
                            <h1 className='uppercase text-7xl '>Desserts</h1>
                            <br />
                            <small className='text-lg'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-10">
                {
                    dessert?.map((item, index) =>
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

export default Dessert;