import React from 'react';
import loader from '../../../assets/others/cupcake.gif'
const Spinner = () => {
    return (
        <div>
            <div className='bg-white h-full w-100 flex items-center justify-center'>
                <div>
                    <img className='w-96 flex mx-auto items-center' src={loader} />
                    <h3 className="text1 text-animation text-center text-6xl bg-white normal-case">Welcome to <br />Culinary Cloud Restaurant</h3>
                </div>
            </div>

        </div>
    );
};

export default Spinner;