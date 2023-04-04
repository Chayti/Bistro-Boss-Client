import React from 'react';
import loader from '../../../assets/others/cupcake.gif'
const Spinner2 = () => {
    return (
        <div>
            <div className='bg-white h-full w-100 flex items-center justify-center'>
                <div>
                    <img className='w-86 flex mx-auto items-center' src={loader} />

                </div>
            </div>

        </div>
    );
};

export default Spinner2;