import React from 'react';

const Cards = ({children}) => {
    const { image, name, recipe, price } = children;
    return (
    
            <div>
                <div className="relative card card-compact w-96 bg-base-100 shadow-xl">
                    <div  className='price absolute bg-gray-900 top-2 right-0 px-4 py-2 text-white'>${price}</div>
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

export default Cards;