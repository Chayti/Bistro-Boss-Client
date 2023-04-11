import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaRocket, FaStar } from "react-icons/fa";
import Rating from 'react-rating';
import swal from 'sweetalert';
import Title from '../../components/shared/Title/Title';

const AddReview = () => {
    const [rating, setRating] = useState(0)
    const [formData, setFormData] = useState({
        name: '',
        details: '',

    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleReset = () => {
        setFormData({
            name: '',
            details: '',


        });
    };


    const handleAddReview = (e) => {

        e.preventDefault()
        formData.rating = rating
        fetch('https://bistro-boss-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(res => {
                if (res.insertedId) {
                    swal({
                        title: "Yahhh!!! ❤️😍",
                        text: "Review Added",
                        icon: "success",
                    })
                }
                else {
                    swal({
                        title: "Sorry!! ",
                        text: "Data not Added 😭 😭 😭",
                        icon: "danger",
                    })
                }
                handleReset();
            })
    }




    return (
        <>
            <Helmet>
                <title>BB Restaurant |  Add Review</title>
            </Helmet>
            <div className="w-full">
                <Title type={{ smallHeading: "Sharing is Caring!!!", title: "Give a review..." }}></Title>
            </div>
            <div className="bg-[#eceae380] mx-10 my-6 px-32 w-10/12 shadow-2xl mb-10">

                <p className="text text-animation text-lg my-4 text-center">Rate US!</p>
                <div className="text-center">
                    <Rating
                        emptySymbol={<FaStar color="#ccc" size="2em" />} // Set the empty star icon and color
                        fullSymbol={<FaStar color="#d1a054" size="2em" />} // Set the full star icon and color
                        onChange={(rate) => {
                            swal({
                                title: "Thank you!💐",
                                text: `You have given ${rate} ratings!!! ❤️😍`,

                            })
                            setRating(rate)

                        }}
                    />
                </div>
                <form className="rounded-lg p-8" onSubmit={handleAddReview}>
                    <div className="mb-4">
                        <label className="text-gray-700 font-semibold mb-1 block">
                            Give your name.
                        </label>
                        <input
                            className="block w-full rounded-md py-2 px-3 text-gray-700 placeholder-gray-400"
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            onChange={handleChange}
                            value={formData.name}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-gray-700 font-semibold mb-1 block">
                            Kindly express your care in a short way.
                        </label>
                        <textarea
                            className="block w-full rounded-md py-2 px-3 text-gray-700 placeholder-gray-400"
                            id="details"
                            name="details"
                            type="text"
                            rows="5"
                            placeholder="review in detail"
                            onChange={handleChange}
                            value={formData.details}
                        />
                    </div>

                    <div className="text-center mt-8">
                        <button className='btn4 flex justify-center items-center'>
                            Send Review
                            <FaRocket className="ml-2" />
                        </button>
                    </div>
                </form >

            </div >
        </>
    )
}

export default AddReview;