import React from 'react';
import { Helmet } from 'react-helmet';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Spinner2 from '../../components/shared/Spinner/Spinner2';
import Title from '../../components/shared/Title/Title';
import useItems from '../../Hooks/useItems';

const ManageItems = () => {
    const navigate = useNavigate();
    const [items, loading, setItems] = useItems();
    console.log(items)
    if (loading) {
        return <Spinner2></Spinner2>
    }

    const handleDeleteItem = (id)=>{
        
        console.log(items)
        fetch(`http://localhost:5000/items/${id}`, {
                        method: 'DELETE', 
                        // headers: {
                        //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                        // }
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            swal(`Poof! Your item has been deleted!`, {
                              icon: "success",
                            });
                          }
                          const remaining = items?.filter((item)=> item._id!==id);
                          setItems(remaining)
                          
                    });
    }
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
                                <th className='bg-[#d1a054] text-white'>Category</th>
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
                                    <td>{item.category}</td>
                                    <td>${item.price}</td>
                                    <td><button onClick={() => navigate(`/dashboard/updateItem/${item._id}`,{state:{item:item}})} className='btn bg-[#d1a054] tooltip text-white border-0' data-tip='edit'><FaRegEdit /></button></td>
                                    <td><button  className='btn bg-red-700 tooltip text-white border-0' onClick={() => handleDeleteItem(item._id)} data-tip='delete'><FaRegTrashAlt /></button></td>
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
