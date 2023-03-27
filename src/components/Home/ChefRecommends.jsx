import React, { useState, useEffect } from 'react';
import Title from '../shared/Title/Title';
import Chef from './Chef';

const ChefRecommends = () => {
    const [specials, setSpecial] = useState([]);

    useEffect(() => {
        fetch('chef.json')
            .then(res => res.json())
            .then(data => setSpecial(data))
    }, [])
    // console.log(specials)
    return (
        <div>

            <Title type={{ smallHeading: 'Should Try', title: 'Chef Recommends', border: 'black' }}></Title>


            <div className="grid grid-cols-3 gap-2 mt-10 place-items-center md:w-10/12 md:mx-auto">

                {
                    specials.map((special, index) => <Chef
                        key={index}
                        special={special}
                    ></Chef>)
                }
            </div>
        </div>

    );
};

export default ChefRecommends;