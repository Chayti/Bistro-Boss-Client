import React from 'react';
import { useNavigate } from 'react-router';

const Card4 = ({ children, icon }) => {
    const { title, data, color1, color2, page, cursor } = children
    console.log(page)
    const navigate = useNavigate();
    return (
        <>
            {
                page && cursor?
                <div onClick={()=> navigate(page)} class="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
                <div className={`bg-gradient-to-r ${color1} ${color2} rounded-lg py-2 pl-10 pr-20 flex items-center shadow-xl w-50 ${cursor}`}>
                    <div className="text-white text-3xl mr-6">
                        {icon}
                    </div>
                    <div className="text-white">
                        <p className="text-4xl font-bold mb-2">{data}</p>
                        <p className="text-xl pl-1">{title}</p>
                    </div>
                </div>
            </div>
            :
            <div  class="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
            <div className={`bg-gradient-to-r ${color1} ${color2} rounded-lg py-2 pl-10 pr-20 flex items-center shadow-xl w-50`}>
                <div className="text-white text-3xl mr-6">
                    {icon}
                </div>
                <div className="text-white">
                    <p className="text-4xl font-bold mb-2">{data}</p>
                    <p className="text-xl pl-1">{title}</p>
                </div>
            </div>
        </div>
            }
        </>
    );
};

export default Card4;