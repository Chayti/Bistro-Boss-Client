import React from 'react';
import { Card } from '../shared/Card/Card';
import Title from '../shared/Title/Title';

export const Offer = ({ items }) => {
    console.log(items)

    return (
        <div>
            <Title type={{ smallHeading: "Don't miss", title: "TODAY'S OFFER", border: 'black' }}></Title>

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
        </div>

    );
};