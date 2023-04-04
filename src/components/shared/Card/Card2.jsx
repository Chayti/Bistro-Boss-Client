import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Cards = ({children}) => {
    const { image, name, recipe, price } = children;
    const {user} = useAuth()
    // console.log(children)
    const addToCart = (data) =>{
        data.email = user.email;
        console.log(data)
        fetch('http://localhost:5000/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
    }
    return (
    
            <div>
                <div className="relative card card-compact w-96 bg-base-100 shadow-xl">
                    <div  className='price absolute bg-gray-900 top-2 right-0 px-4 py-2 text-white'>${price}</div>
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body place-items-center bg-gray-200">
                        <h2 className="card-title">{name}</h2>
                        <p>{recipe}</p>
                        <div className="card-actions justify-center">
                        <button onClick={()=>addToCart(children)} className="btn  uppercase bg-gray-300 border-b-2 border-0 border-yellow-700 text-yellow-700 ">Add to cart</button>
                    </div>
                </div>
                </div>
            </div> 
      
    );
};

export default Cards;