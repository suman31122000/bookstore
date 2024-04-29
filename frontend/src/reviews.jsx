import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Reviews = () => {
    const navigate=useNavigate();
    const handlereview=()=>{
        navigate('/addcomment')
    }
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/getcomment'); 
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div id="classes" className="h-[80vh] w-full overflow-hidden bg-slate-100">
            <div className="max-w-4xl break-words h-[10%] w-full pl-20 text-red-950">
                <span className="text-4xl font-bold">Customer Reviews</span>
                <button className="bg-blue-700 rounded-md h-10 w-32 font-semibold text-white mt-4 ml-4" onClick={handlereview}>Add Review</button>

            </div>
            <div className="h-[70%] w-full flex flex-nowrap overflow-x-scroll no-scrollbar p-4 ">
                {reviews.map((review, index) => (
                    <div key={index} className="relative flex-shrink-0   h-[100%] min-w-[200px] p-4 gap-4 bg-slate-200">
                        <div className='bg-slate-100 border-8 h-[100%] flex flex-col justify-center items-center px-4'>
                            <span className='text-2xl font-semibold'>{review.user}</span>
                            <span className='text-2xl font-semibold'>Book: {review.bookname}</span>
                            <div className="w-full max-w-[300px] overflow-y-scroll no-scrollbar">
                                <span className='flex flex-wrap'>{review.comment}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reviews;
