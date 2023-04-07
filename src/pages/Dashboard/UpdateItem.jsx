import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import InputField from '../../components/shared/InputField';
import { useLocation, useParams } from 'react-router-dom';

const UpdateItem = () => {

    const imageHostKey = '40f387f08ab881d665744d10287c41b8';
    const {id} = useParams();
    const location = useLocation()
    console.log(location.state.item)
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        recipe: '',
        image: null
    });

    const handleChange = (event) => {
        console.log(event)
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleReset = () => {
        setFormData({
            name: '',
            category: '',
            price: '',
            recipe: '',
            image: null
        });
    };
    const [imageFile, setImageFile] = useState(null);

    const handleImageChange = (event) => {
        setImageFile(event.target.files[0]);
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
                    console.log(imgData.data.url);

                    formData.image = imgData.data.url;
                    console.log(formData);

                  
                }
            })

    };
    

   

    const handleUpdate = (e)=> {
        e.preventDefault()
        fetch(`http://localhost:5000/items/${id}`, {
            method: 'PATCH', 
            headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            'content-type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                swal({
                    title: "Yahhh!!! ❤️😍",
                    text: "Item Updated",
                    icon: "success",
                })
               handleReset() 
            }
        })
    }

    return (
        <>
            <Helmet>
                <title>BB Restaurant |  Update Item</title>
            </Helmet>
            <h1 className='my-14 text-center text-5xl text-animation text font-extrabold '>Update Item</h1>
            <div className="bg-[#eceae380] mx-20 p-6">
                <form className="rounded-lg p-8" onSubmit={handleUpdate}>
                    <div className="flex flex-wrap -mx-4 mb-4">
                        <div className="w-full px-4 mb-4 md:mb-0">
                            <InputField
                                label="Recipe name"
                                name="name"
                                type="text"
                                value={location.state.item.name}
                                onChange={handleChange}
                                
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <InputField
                                label="Category"
                                name="category"
                                type="text"
                                placeholder={location.state.item.category}
                            onChange={handleChange}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <InputField
                                label="Price"
                                name="price"
                                type="number"
                               
                                placeholder={location.state.item.price}
                            onChange={handleChange}
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
                            
                            placeholder={location.state.item.recipe}
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="file"
                            onChange={handleImageChange}
                            required />
                    </div>

                    <div className="text-center mt-8">
                        <button className='btn4'>
                            Update Recipe Details
                        </button>
                    </div>
                </form >

            </div >
        </>
    )
}

export default UpdateItem;
