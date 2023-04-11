import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Cards = ({ children }) => {
    const { image, name, recipe, price } = children;
    const { user } = useAuth()
    const navigate = useNavigate()
    const addToCart = (data) => {
        if (user.email) {
            data.email = user.email;
            const { image, name, category, price, email } = data;
            fetch('https://bistro-boss-server.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ image, name, category, price, email })
            })
                .then(res => res.json())
                .then(result => {
                    swal({
                        title: "Yay!",
                        text: `${name} has been added to your cart!`,
                        icon: "success",
                        button: "Aww yiss!",
                    });
                })
        }
        else {
            navigate('/login')
        }

    }
    return (

        <div>
            <div className="relative card card-compact w-96 bg-base-100 shadow-xl">
                <div className='price absolute bg-gray-900 top-2 right-0 px-4 py-2 text-white'>${price}</div>
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body place-items-center bg-gray-200">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => addToCart(children)} className="btn  uppercase bg-gray-300 border-b-2 border-0 border-yellow-700 text-yellow-700 ">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Cards;