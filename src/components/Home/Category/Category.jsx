import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import image1 from '../../assets/asset/slide1.jpg'
import image2 from '../../assets/asset/slide-2.jpg'
import image3 from '../../assets/asset/slide-3.jpg'
import image4 from '../../assets/asset/slide-4.jpg'
 import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
 import './Category.css'
const Category = () => {
  
  const images = [
    {
      slide: image1,
    },
    {
      slide: image2,
    },
    {
      slide: image3,
    },
    {
      slide: image4,
    },
  ];
  return (
    <div className="flex justify-center">
      <Swiper
    
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((image) => (
         <SwiperSlide><img src={image.slide} alt=""  /></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
