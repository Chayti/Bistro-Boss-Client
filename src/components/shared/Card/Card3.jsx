import React from 'react';

const Card3 = ({ children, icon }) => {
    console.log(children, icon)
    const { title, name, data } = children
    return (

        <div className="border-solid border-2">
            <div className='price bg-[#d1a054] flex justify-center px-4 py-2 text-white'>{icon}</div>
            <div className="px-4 pb-4">
                <div className="card w-96 bg-[#f5f5f5] border-dotted border-2">
                    <div className="card-body place-items-center bg-[#f5f5f5] pb-10">
                        <h2 className="card-title">{name}</h2>
                        <p>{data[0]}</p>
                        {data[1] ? <p>{data[1]}</p> : <div className="h-6"></div>}
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Card3;