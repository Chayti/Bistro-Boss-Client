import React from 'react';
import Card from '../shared/Card/Card';
import Title from '../shared/Title/Title';
import './Menu.css'
const Offer = ({ items }) => {
    // console.log(items)

    return (
        <div>
            <Title type={{ smallHeading: "Don't miss", title: "TODAY'S OFFER", border: 'black' }}></Title>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-10">
                {
                    items?.map((item, index) =>
                        <div className="flex space-x-4" key={index}>
                            <Card>
                                {item}
                            </Card>
                        </div>
                    )
                }
            </div>
        </div>

    );
};

export default Offer;