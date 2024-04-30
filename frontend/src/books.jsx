
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Api from './api';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
    
        const fetchData = async () => {
            try {
                const response = await axios.get(`${Api}/find`);
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
       const [itemHeight,setItemHeight]=useState();
    useEffect(() => {
        const calculateHeight = () => {
            const screenHeight = window.innerHeight;
            const itemCount = books.length;
            const itemHeight = screenHeight * 0.4; // 10% of screen height
            setItemHeight(itemHeight);
        };

        calculateHeight();

        window.addEventListener("resize", calculateHeight);

        return () => {
            window.removeEventListener("resize", calculateHeight);
        };
    }, [books]);

    return (
        <div className="h-fit w-full bg-slate-100 flex flex-col">
            <div className="h-[40vh] w-full flex justify-center items-center" style={{backgroundImage: 'url(image1.webp)',backgroundRepeat:'no-repeat',backgroundPosition:'centre'}}>
                <span className="text-6xl font-bold text-slate-400">WELCOME TO BOOK STORE</span>
            </div>
            <div className="flex-grow flex items-center justify-center mt-10">
                <div className="grid grid-cols-3 gap-8" style={{ maxWidth: "1200px" }}>
                    {books.map((books, index) => (
                        <div key={index} className="flex flex-col justify-center items-center bg-slate-400" style={{ width: `${itemHeight}px`, height: `${itemHeight}px` }}>
                            <div className="flex flex-col justify-center items-center">
                                <span className='text-2xl flex justify-center items-center'>{books.name}</span>
                                <span>Author: {books.author}</span>
                                <button className="mt-2">${books.price}</button>
                            </div>
                            <div className='flex justify-center'>
                        <button className="bg-blue-700 rounded-md h-10 w-32 font-semibold text-white mt-4">Rent</button>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Books;
