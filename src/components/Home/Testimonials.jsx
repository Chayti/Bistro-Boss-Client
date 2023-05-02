import React, { useState, useEffect } from 'react';
import Title from '../shared/Title/Title';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Rating from 'react-rating';
import { useQuery } from '@tanstack/react-query';

const Testimonials = () => {
    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/reviews");
            const data = await res.json();
            return data;
        }
    });


    return (
        <div>
            <Title type={{ smallHeading: 'What Our Clients Say', title: 'Testimonials' }}></Title>

            {/* //happy */}
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews?.map((review, index) =>
                        <SwiperSlide key={index} >
                            <div className='w-8/12 flex mx-auto mb-10'>
                                <div className='text-center'>
                                    <Rating
                                        initialRating={review.rating}
                                        readonly
                                        emptySymbol={<FaStar color="#ccc" size="2em" />} // Set the empty star icon and color
                                        fullSymbol={<FaStar color="#d1a054" size="2em" />} // Set the full star icon and color
                                    />
                                    <FaQuoteLeft className='flex mx-auto text-black text-7xl my-10' />
                                    <p>{review.details}</p>
                                    <small className='text-yellow-700 uppercase text-2xl'>{review.name}</small>
                                </div>
                            </div>
                        </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;