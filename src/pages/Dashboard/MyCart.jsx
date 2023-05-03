import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/shared/Title/Title';
import useCarts from '../../Hooks/useCarts';
import Spinner2 from '../../components/shared/Spinner/Spinner2';


const MyCart = () => {
    const navigate = useNavigate();
    const [carts, isLoading, refetch] = useCarts();
    const [showInput, setShowInput] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [couponCode, setCouponCode] = useState('');
    const [couponPrice, setCouponPrice] = useState(0);
    const [couponPercent, setCouponPercent] = useState(0);
  
    console.log(couponCode)
    let total = carts ? carts?.reduce((acc, order) => acc + order.price, 0) : 0;
 

    const handleApplyCoupon = () => {
        setShowInput(!showInput);
    };

    const handleCouponCodeChange = (event) => {
        setCouponCode(event.target.value);
    };

    if (isLoading) {
        return <Spinner2></Spinner2>
    }

    const handleDeleteItem = (cart) => {

        fetch(`https://bistro-boss-server.vercel.app/carts?email=${cart.email}&id=${cart._id}&delete=false`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    swal(`Poof! Your item has been deleted!`, {
                        icon: "success",
                    });
                }

            });
        refetch();
    }


    const handlePayment = () => {
     
        navigate('/dashboard/payment', { state: { couponPrice: couponPrice ? couponPrice : total, category: 'Food Order', coupon: couponPercent,amount:total  } })
        // handleDeleteItem(true)
    }

    const handleValidateCoupon = (e) => {

        e.preventDefault()
        setIsDisabled(!isDisabled)
        
        fetch(`https://bistro-boss-server.vercel.app/coupons?coupon_code=${couponCode}`)
            .then(res => res.json())
            .then(data => {
                
                setCouponPercent(data[0].percentage)
                if (data[0]?.coupon_code) {
                    console.log(data[0].percentage)
                    if (total > 150 && data[0].percentage == 50) {
                        console.log(total, data[0].percentage)
                        total = total - [(total * data[0].percentage) / 100];
                        setCouponPrice(total)
                    }
                    else if (total >= 120 && total <= 150 && data[0].percentage == 30) {
                        total = total - [(total * data[0].percentage) / 100];
                        setCouponPrice(total)
                    }
                    else if (total >= 100 && data[0].percentage == 20) {
                        total = total - [(total * data[0].percentage) / 100];
                        setCouponPrice(total)

                    }
                    else {
                        swal(`Price too less!`, {
                            icon: "error",
                        });
                        setIsDisabled(false)
                    }

                }
                else {
                    swal(`Wrong Coupon Code!`, {
                        icon: "error",
                    });
                    setIsDisabled(false)
                }
                setCouponCode('');
            })

    };


    return (

        <>
            <Helmet>
                <title>BB Restaurant |  My Cart</title>
            </Helmet>
            <div className="w-full">
                <Title type={{ smallHeading: "My Cart", title: "Wanna add more?" }}></Title>
            </div>
            <div className='flex'>
                {
                    total >= 100 && (
                        <>
                            {
                                showInput ?
                                    <div>
                                        <form onSubmit={handleValidateCoupon}>
                                            <input contentEditable='true' type="text"
                                                placeholder={total > 150
                                                    ? 'BBKHABO50'
                                                    : total >= 120 && total <= 150
                                                        ? 'BBKHABO30'
                                                        : 'BBKHABO20'}
                                                value={couponCode} className='focus:shadow-none focus:border-0 py-1 pl-1' onChange={handleCouponCodeChange} required />

                                            <input disabled={isDisabled} type='submit' value='Apply' className={isDisabled ? 'cursor-not-allowed text-gray-400' : 'text-[#d1a054] text-sm mb-4 border-2 border-[#d1a054] px-3 p-1 cursor-pointer font-bold'} />
                                        </form>
                                    </div> :
                                    <button onClick={handleApplyCoupon} className='text-animation text-sm mb-4 border-2 border-[#d1a054] px-3 p-1'>Apply Coupon</button>

                            }
                        </>
                    )
                }
            </div>
            <div className='mb-14 w-11/12 p-10 shadow-2xl overflow-y-scroll bg-white rounded-2xl'>

                <div className='flex justify-between items-center text-3xl text mb-4 font-bold'>

                    <h1 >Total orders: {carts.length}</h1><h1>Total Price: ${couponPrice ? couponPrice.toFixed(2) : total.toFixed(2)}</h1> <button onClick={handlePayment} className='btn bg-[#d1a054] py-2 border-0 px-5'>Pay</button>
                </div>
                <div className="overflow-x-auto">
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
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carts?.map((cart, index) => <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td><img className='h-14' src={cart.image} alt="" /></td>
                                    <td>{cart.name}</td>
                                    <td>{cart.category}</td>
                                    <td>${parseFloat(cart.price).toFixed(2)}</td>

                                    <td><button className='btn bg-red-700 tooltip text-white border-0' data onClick={() => handleDeleteItem(cart)}><FaRegTrashAlt /></button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </>
    );
}

export default MyCart;
// className='btn bg-red-700 tooltip text-white border-0' data-tip='delete'