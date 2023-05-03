import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaUtensils } from "react-icons/fa";
import swal from 'sweetalert';
import InputField from '../../components/shared/InputField';
import Title from '../../components/shared/Title/Title';
import useAuth from '../../Hooks/useAuth';

const AddItem = () => {

    const categories = [
        { id: 0, name: '<select category>' },
        { id: 1, name: 'offered' },
        { id: 2, name: 'popular' },
        { id: 3, name: 'dessert' },
        { id: 4, name: 'pizza' },
        { id: 5, name: 'salad' },
        { id: 6, name: 'soup' },
        { id: 7, name: 'drinks' },
    ]
    const { user } = useAuth();
    const imageHostKey = '40f387f08ab881d665744d10287c41b8';
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        details: '',
        image: null
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    const [imageFile, setImageFile] = useState(null);
    const handleImageChange = (event) => {
        setImageFile(event.target.files[0]);
    };


    const handleReset = () => {
        setFormData({
            name: '',
            category: '',
            price: '',
            details: '',
            image: null
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault()
        // console.log(formData)
        // console.log(imageFile)

        const image = imageFile;
        const imageData = new FormData();
        imageData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: imageData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    // console.log(imgData.data.url);

                    formData.email = user?.email;
                    formData.image = imgData.data.url;
                    // console.log(formData);

                    fetch('https://bistro-boss-server.vercel.app/addItems', {
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
                                    text: "Item Added",
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
            })

    };

    return (
        <>
            <Helmet>
                <title>BB Restaurant |  Add Item</title>
            </Helmet>
            <div className="w-full">
                <Title type={{ smallHeading: "What's new?", title: "Add an item" }}></Title>
            </div>
            <div className="bg-[#eceae380] mx-20 p-6 shadow-2xl w-10/12">

                <form className="rounded-lg p-8" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -mx-4 mb-4">
                        <div className="w-full px-4 mb-4 md:mb-0">
                            <InputField
                                label="Item name"
                                name="name"
                                type="text"
                                placeholder="item Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            {/* <InputField
                                label="Category"
                                name="category"
                                type="text"
                                placeholder="category"
                                value={formData.category}
                                onChange={handleChange}
                            /> */}
                            <label className="text-gray-700 font-semibold mb-1 block" htmlFor="categories">
                                Categories
                            </label>
                            <select
                                label="Category"
                                name="category"
                                onChange={handleChange}
                            >
                                {categories.map((category) => (
                                    <option key={category.id} value={category.name}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <InputField
                                label="Price"
                                name="price"
                                type="number"
                                placeholder="price"
                                value={formData.price}
                                onChange={handleChange}
                            />
                        </div>

                    </div>
                    <div className="mb-4">
                        <label className="text-gray-700 font-semibold mb-1 block" htmlFor="details">
                            Item Details<sup>*</sup>
                        </label>
                        <textarea
                            className="block w-full rounded-md py-2 px-3 text-gray-700 placeholder-gray-400"
                            id="details"
                            name="details"
                            type="text"
                            rows="5"
                            placeholder="item details"
                            required
                            value={formData.details}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            id="image"
                            name="image"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
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
