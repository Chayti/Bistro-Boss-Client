import React from 'react';
import { Helmet } from 'react-helmet';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/shared/Title/Title';

const ManageItems = () => {
    const navigate = useNavigate();
    const items = [
        {
            "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2017/01/bbq-105x105.jpg",
            "name": "Roast Duck Breast",
            "price": 14.50
        },
        {
            "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2017/01/bbq-105x105.jpg",
            "name": "Tuna Niçoise",
            "price": 14.50
        },
        {
            "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2017/01/bbq-105x105.jpg",
            "name": "Escalope de Veau",
            "price": 14.50
        },
        {
            "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2017/01/bbq-105x105.jpg",
            "name": "Chicken and Walnut Salad",
            "price": 14.50
        },
        {
            "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2017/01/bbq-105x105.jpg",
            "name": "Fish Parmentier",
            "price": 14.50
        },
        {
            "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2017/01/bbq-105x105.jpg",
            "name": "Roasted Pork Belly",
            "price": 14.50
        },


    ]
    return (
        <>
            <Helmet>
                <title>BB Restaurant |  Manage Items</title>
            </Helmet>
            <div className="w-full">
                <Title type={{ smallHeading: "Hurry Up!", title: "Manage all Items" }}></Title>
            </div>

            <div className='mb-14 w-11/12 p-10 shadow-2xl overflow-y-scroll scroll-smooth bg-white rounded-2xl'>

                <h1 className='text-3xl text mb-4 font-bold'>Total items: {items.length}</h1>
                <div className="">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='bg-[#d1a054] text-white'></th>
                                <th className='bg-[#d1a054] text-white'>Item Image</th>
                                <th className='bg-[#d1a054] text-white'>Item Name</th>
                                <th className='bg-[#d1a054] text-white'>Price</th>
                                <th className='bg-[#d1a054] text-white'>Action</th>
                                <th className='bg-[#d1a054] text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((item, index) => <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td><img className='h-14' src={item.image} alt="" /></td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td><button onClick={() => navigate('/dashboard/updateItem')} className='btn bg-[#d1a054] tooltip text-white border-0' data-tip='edit'><FaRegEdit /></button></td>
                                    <td><button onClick={() => swal({
                                        title: "Are you sure?",
                                        text: "Message sent",
                                        icon: "error",
                                    })} className='btn bg-red-700 tooltip text-white border-0' data-tip='delete'><FaRegTrashAlt /></button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ManageItems;
