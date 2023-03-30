import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import image1 from '../../assets/asset/home/slide1.jpg'
import image2 from '../../assets/asset/home/slide-2.jpg'
import image3 from '../../assets/asset/home/slide-3.jpg'
import image4 from '../../assets/asset/home/slide-4.jpg'
import image5 from '../../assets/asset/home/slide-5.jpg'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import Title from '../shared/Title/Title';
import './Home.css'

const Category = () => {

  const images = [
    {
      slide: image1,
      name: 'SALADS'
    },
    {
      slide: image2,
      name: 'SOUPS'
    },
    {
      slide: image3,
      name: 'PIZZAS'
    },
    {
      slide: image4,
      name: 'DESSERTS'
    },
    {
      slide: image5,
      name: 'DRINKS'
    }
  ];
  return (
    <div>
      <Title type={{ smallHeading: 'From 11:00am to 10:00pm', title: 'ORDER ONLINE' }}></Title>
      <div className="flex justify-center">


        <Swiper

          slidesPerView={1}
          spaceBetween={2}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-11/12"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="slide container" ><img className="flex mx-auto" src={image.slide} alt="" />
              <h1 className="text-overlay text-3xl">{image.name}</h1></SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
