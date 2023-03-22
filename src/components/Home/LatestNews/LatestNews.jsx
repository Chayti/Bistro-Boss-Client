import React from 'react';
import './LatestNews.css'
import image from '../../../assets/asset/latestnews.jpg'
import Title from '../../shared/Title/Title';

const LatestNews = () => {
    return (
<<<<<<< HEAD
        <div className='latest-news p-20 relative text-white mt-20 '>
=======
        <div className='latest-news p-12 relative text-white mt-20'>
           
           <Title type ={{smallHeading:'From our blog',title:'Latest News', border:'white'}}></Title>
>>>>>>> 660f65cb52807ff0d566afa927057b8bcda29791

            <Title type={{ smallHeading: 'From our blog', title: 'Latest News', border: 'white' }}></Title>

            <div class="relative z-10 flex justify-center items-center">
                <div>
                    <img src={image} />
                </div>

                <div className='ml-10'>
                    <small>March 20, 2023</small>
                    <h1 className='uppercase'>Where Can I get some?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                    <button className="btn border-b-4 border-white  border-0 bg-transparent text-white uppercase mt-10">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;