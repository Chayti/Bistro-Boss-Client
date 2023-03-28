import React from 'react';
import loader from '../../../assets/others/cupcake-dribbble.gif'
const Spinner = () => {
    return (
        <div className='bg-white w-100 h-screen flex justify-center items-center'>
            <img className='w-72' src={loader}/>
        </div>
    );
};

export default Spinner;