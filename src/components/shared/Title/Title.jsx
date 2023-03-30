import React from 'react';

const Title = ({ type }) => {

    return (
        <div>
            <i className='flex justify-center relative z-10 mb-2 text-yellow-600 mt-20'>---{type?.smallHeading}---</i>
            <h1 className={`relative z-10 text-3xl mx-auto uppercase text-center mb-10 border-t-4 border-b-4 py-5 md:w-3/12 `}>{type.title}</h1>
        </div>
    );
};

export default Title;