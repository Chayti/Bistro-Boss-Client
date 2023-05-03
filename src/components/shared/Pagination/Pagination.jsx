import React, { useState, useEffect } from 'react';
import Spinner2 from '../Spinner/Spinner2';
import axios from 'axios';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import loader from '../../../assets/others/loader2.gif';
import Cards from '../Card/Card2';

const Pagination = ({ category }) => {

    const queryClient = useQueryClient()
    const [page, setPage] = useState(0)

    async function fetchItems(page = 0) {
        const url = `http://localhost:5000/items?page=${page}&size=6&category=${category}`;
        const { data } = await axios.get(url)
        // console.log(data)
        return data
    }

    const { status, data, error, isFetching, isPlaceholderData } = useQuery({
        queryKey: ['items', page],
        queryFn: () => fetchItems(page),
        placeholderData: { items: [] }
    })

    useEffect(() => {
        if (!isPlaceholderData && data.products.length) {
            queryClient.prefetchQuery({
                queryKey: ['items', page + 1],
                queryFn: () => fetchItems(page + 1)
            })
        }
    }, [data, isPlaceholderData, page, queryClient])

    return (
        status === 'pending'
            ? (<Spinner2></Spinner2>)
            : status === 'error'
                ? (<div>Error: {error.message}</div>)
                : (
                    <div>
                        <div className="grid md:grid-cols-3 gap-x-2 gap-y-10 mt-10 place-items-center">
                            {
                                data?.products?.map((item, index) =>
                                    <Cards keys={index}>
                                        {item}
                                    </Cards>
                                )
                            }
                        </div>

                        {/* Paginations styles */}

                        <div className="flex mt-10 items-center h-40">
                            <button
                                className={page === 0 ? 'btn hover:bg-[#d1a054] ml-10 rounded-full' : 'btn hover:bg-[#d1a054] bg-transparent text-black ml-10 rounded-full'}
                                onClick={() => setPage((old) => Math.max(old - 1, 0))}
                                disabled={page === 0}
                            >
                                <FaArrowLeft />
                            </button>
                            <div className="mx-3"> {page + 1} / {Math.ceil(data?.count / 6)} </div>
                            <button
                                className={isPlaceholderData || data?.products.length < 6 ? 'btn hover:bg-[#d1a054] rounded-full' : 'btn hover:bg-[#d1a054] bg-transparent text-black rounded-full'}
                                onClick={() => {
                                    setPage((old) => (data?.products.length ? old + 1 : old))
                                }}
                                disabled={isPlaceholderData || data?.products.length < 6}
                            >
                                <FaArrowRight />
                            </button>

                            {isFetching ? <img src={loader} className="h-40" /> : null}

                        </div>

                    </div>
                )
    );
};

export default Pagination;













// import React from 'react';
// const Pagination = ({pages,page, count,setPage}) => {

//     return (
//        <>

//         {count<7?'':
//             [...Array(pages).keys()].map(number => <button
//                 key={number}
//                 className={page === number ? 'btn rounded-full hover:bg-[#d1a054] mr-3' : 'btn rounded-full hover:bg-[#d1a054] bg-transparent text-black mr-3'}
//                 onClick={() => setPage(number)}
//             >
//                 {number + 1}
//             </button>)
//         }
//          </> 

//     );
// };

// export default Pagination;