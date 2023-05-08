import React, { useState, useEffect, useContext } from 'react';
import Title from '../shared/Title/Title';
import Chef from './Chef';
import useItems from '../../Hooks/useItems';
import Spinner2 from '../shared/Spinner/Spinner2';
import { AuthContext } from '../../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';

const ChefRecommends = () => {
    const [items, loading] = useItems();
    if (loading) {
        return <Spinner2></Spinner2>
    }
    const specials = items.filter(item => item.category.includes('popular'));
    // console.log(specials)
    return (
        <div>

            <Title type={{ smallHeading: 'Should Try', title: 'Chef Recommends' }}></Title>


            <div className=" grid md:grid-cols-3 gap-x-2 gap-y-10 mt-10 place-items-center md:w-10/12 md:mx-auto">

                {
                    specials.slice(0,3).map((special, index) => <Chef
                        key={index}
                        special={special}
                    ></Chef>)
                    
                }
            </div>
        </div>

    );
};

export default ChefRecommends;