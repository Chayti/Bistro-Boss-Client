import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaUtensils } from "react-icons/fa";
import InputField from '../../components/shared/InputField';
import Title from '../../components/shared/Title/Title';

const AddItem = () => {

    const [name, setName] = useState('');

    function sendEmail(e) {
        e.preventDefault();

    }

    return (
        <>
            <Helmet>
                <title>BB Restaurant |  Add Item</title>
            </Helmet>
            <div className="w-full">
                <Title type={{ smallHeading: "What's new?", title: "Add an item" }}></Title>
            </div>
            <div className="bg-[#eceae380] mx-20 p-6 shadow-2xl w-10/12">

                <form className="rounded-lg p-8" onSubmit={sendEmail}>
                    <div className="flex flex-wrap -mx-4 mb-4">
                        <div className="w-full px-4 mb-4 md:mb-0">
                            <InputField
                                label="Recipe name"
                                name="name"
                                type="text"
                                placeholder="recipe Name"
                            // value={name}
                            // onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <InputField
                                label="Category"
                                name="category"
                                type="text"
                                placeholder="category"
                            // value={name}
                            // onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <InputField
                                label="Price"
                                name="price"
                                type="number"
                                placeholder="price"
                            // value={name}
                            // onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                    </div>
                    <div className="mb-4">
                        <label className="text-gray-700 font-semibold mb-1 block" htmlFor="recipe">
                            Recipe Details<sup>*</sup>
                        </label>
                        <textarea
                            className="block w-full rounded-md py-2 px-3 text-gray-700 placeholder-gray-400"
                            id="recipe"
                            name="recipe"
                            type="text"
                            rows="5"
                            placeholder="recipe details"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="file"
                            required />
                    </div>

                    <div className="text-center mt-8">
                        <button className='btn4 flex justify-center items-center'>
                            Add Item
                            <FaUtensils className="ml-2" />
                        </button>
                    </div>
                </form >

            </div >
        </>
    )
}

export default AddItem;
