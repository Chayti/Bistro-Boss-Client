import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../shared/Card/Card';
import Title from '../shared/Title/Title';
import './Menu.css'
const Offer = ({ items }) => {
    // console.log(items)

    const offer = items.filter(item => item.category.includes('offered'));
    // console.log(offer)


    return (
        <div>
            <Title type={{ smallHeading: "Don't miss", title: "TODAY'S OFFER", border: 'black' }}></Title>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-10">
                {
                    offer?.map((item, index) =>
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
        </div>

    );
};

export default Offer;