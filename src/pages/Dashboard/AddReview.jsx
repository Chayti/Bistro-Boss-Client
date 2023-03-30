import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaRocket } from "react-icons/fa";
import Rating from 'react-rating';
import swal from 'sweetalert';
import Title from '../../components/shared/Title/Title';

const AddReview = () => {

    const [name, setName] = useState('');

    function sendEmail(e) {
        e.preventDefault();

    }

    return (
        <>
            <Helmet>
                <title>CC Restaurant | Add Review</title>
            </Helmet>
            <div className="w-full">
                <Title type={{ smallHeading: "Sharing is Caring!!!", title: "Give a review..." }}></Title>
            </div>
            <div className="bg-[#eceae380] mx-10 my-6 px-32 w-10/12 shadow-2xl">

                <p className="text text-animation text-lg my-4 text-center">Rate US!</p>
                <div className="text-center">
                    <Rating
                        onChange={(rate) => swal({
                            title: "Thank you!💐",
                            text: `You have given ${rate} ratings!!! ❤️😍`,
                        })}
                    />
                </div>
                <form className="rounded-lg p-8" onSubmit={sendEmail}>
                    <div className="mb-4">
                        <label className="text-gray-700 font-semibold mb-1 block">
                            Which recipe you liked most?
                        </label>
                        <input
                            className="block w-full rounded-md py-2 px-3 text-gray-700 placeholder-gray-400"
                            id="recipe"
                            name="recipe"
                            type="text"
                            placeholder="recipe you liked most"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-gray-700 font-semibold mb-1 block">
                            Do you have any suggestion for us?
                        </label>
                        <input
                            className="block w-full rounded-md py-2 px-3 text-gray-700 placeholder-gray-400"
                            id="suggestion"
                            name="suggestion"
                            type="text"
                            placeholder="suggestion"
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