import React from 'react';
import { Card } from '../shared/Card';

export const Pizza = ({ items }) => {
    console.log(items)

    return (
        <>
            <div className="container-lg my-20">
                <div className="pizza-banner bg-img2 flex justify-center items-center">
                    <div className='section2 text-style text-white flex justify-center items-center font-bold'>
                        <div className="text-center">
                            <h1 className='uppercase text-7xl '>PIZZA</h1>
                            <br />
                            <small className='text-lg'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-5 px-10">
                {
                    items?.map((item) =>
                        <div className="flex space-x-4">
                            <Card>
                                {item}
                            </Card>
                        </div>
                    )
                }
            </div>
        </>


    );
};