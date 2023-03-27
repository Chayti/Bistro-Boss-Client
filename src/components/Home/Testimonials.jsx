import React, { useState, useEffect } from 'react';
import Title from '../shared/Title/Title';
import { FaQuoteRight } from 'react-icons/fa';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
const Testimonials = () => {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch("reviews.json")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);


    return (
        <div>
            <Title type={{ smallHeading: 'What Our Clients Say', title: 'Testimonials', border: 'black' }}></Title>

            {/* //happy */}
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews?.map((review, index) =>
                        <SwiperSlide key={index}>
                            <div className='w-full flex justify-center mb-10'>
                                <div className='text-center'>
                                    <FaQuoteRight className='flex mx-auto text-black text-7xl my-10' />
                                    <p>{review.reviews}</p>
                                    <small className='text-yellow-700 uppercase'>{review.name}</small>
                                </div>
                            </div>
                        </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;