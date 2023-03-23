import React from 'react';
import '../css/Home.css'
import '../../shared/css/Common.css' /*bg-fixed*/
const About = () => {
    return (
        <div className='bg-fixed about-image flex justify-center mt-20 items-center'>
           <div className='bg-white p-5 w-9/12 text-center'>
            <h1 className='text-4xl mb-5'>Culinary Cloud</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
           </div>
        </div>
    );
};

export default About;