import React from 'react';
import loader from '../../../assets/others/cupcake-dribbble.gif'
const Spinner = () => {
    return (
        <div className='bg-white w-100 flex justify-center items-center'>
            <img className='w-96' src={loader} />
        </div>
    );
};

export default Spinner;