import React from 'react';
const Pagination = ({pages,page, count,setPage}) => {
 
    return (
       <>
        
        {count<7?'':
            [...Array(pages).keys()].map(number => <button
                key={number}
                className={page === number ? 'btn rounded-full hover:bg-[#d1a054] mr-3' : 'btn rounded-full hover:bg-[#d1a054] bg-transparent text-black mr-3'}
                onClick={() => setPage(number)}
            >
                {number + 1}
            </button>)
        }
         </> 
       
    );
};

export default Pagination;