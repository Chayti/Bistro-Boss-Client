import React from 'react';
import Title from '../Title/Title';

const Testimonials = () => {
    
    return (
        <div className='my-20'>
         <Title type ={{smallHeading:'What Our Clients Say',title:'Testimonials', border:'black'}}></Title>


         <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
               <div className='w-96 mx-auto text-center'>
               <img className="mx-auto w-24" src="https://fbsymbols.net/wp-content/uploads/2022/11/quotation-mark-symbol.png" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos omnis consequatur itaque illo id, libero repudiandae</p>
                <br />
                <small className='text-yellow-700 uppercase text-2xl'>John Doe</small>
               </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                
                <a href="#slide4" className="btn bg-transparent border-0 text-black">❮</a> 
                <a href="#slide2" className="btn bg-transparent border-0 text-black">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Testimonials;