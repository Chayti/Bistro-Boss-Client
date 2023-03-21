import React from 'react';

const Chef = ({special}) => {
    const {name, image, recipe}=special;
    return (
        <div>
             <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body place-items-center bg-gray-300">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                <button className="btn  uppercase bg-gray-300 border-b-2 border-0 border-yellow-700 text-yellow-700 ">Add to cart</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Chef;