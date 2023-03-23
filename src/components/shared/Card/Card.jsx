import React, { useState, useEffect } from 'react';

export const Card = ({ children }) => {
    console.log(children)
    const { image, name, recipe, price } = children

    return (
        <>
            <img height='100' width='80' style={{ borderRadius: "0 50% 50%" }} src={image} alt="" />
            <div className="items-center ">
                <h1 className="uppercase font-serif">{name} ------------------</h1>
                <p className="text-gray-500">{recipe}</p>
            </div>
            <p className="text-yellow-700">${price}</p>
        </>
    );
};