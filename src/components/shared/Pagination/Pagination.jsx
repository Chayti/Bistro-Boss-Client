import React from 'react';
const Pagination = () => {
    return (
       
            
          
        <div className="flex justify-between w-3/12">
        <button className='btn rounded-full hover:bg-[#d1a054]'>&laquo;</button>
        <button className="btn rounded-full hover:bg-[#d1a054] bg-transparent text-black">1</button>
        <button className="btn rounded-full hover:bg-[#d1a054] bg-transparent text-black">2</button>
        <button className="btn rounded-full hover:bg-[#d1a054] bg-transparent text-black">3</button>
        <button className="btn rounded-full hover:bg-[#d1a054] bg-transparent text-black">4</button>
        <button className="btn rounded-full hover:bg-[#d1a054] bg-transparent text-black">5</button>
        <button className='btn rounded-full hover:bg-[#d1a054]'>&raquo;</button>
        </div>
            
        
    );
};

export default Pagination;