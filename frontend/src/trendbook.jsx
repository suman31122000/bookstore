import React from 'react';

const Otherbooks = () => {
    const objects = [
        { img: "image11.jpg", price: "$ 2" },
        { img: "image2.jpg", price: "$ 3" },
        { img: "image3.jpg", price: "$ 5"},
        { img: "image4.jpg", price: "$ 4" },
        { img: "image5.avif", price: "$ 3" }
    ];

    return (
        <div id="classes" className="h-[70vh] w-full bg-slate-100 overflow-y-hidden">
            <div className="max-w-4xl break-words h-[10%] w-full pl-20 text-red-950">
                <span className="text-4xl font-bold">Trending Books</span>
            </div>
            <div className="h-[70%] w-full flex flex-nowrap overflow-y-scroll no-scrollbar p-8">
                {objects.map((object, index) => (
                    <div key={index} className="relative flex-shrink-0 mr-4">
                        <img src={object.img} className="max-h-[90%] max-w-full" alt={`Image ${index + 1}`} />
                        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-0 transition duration-300 opacity-0 hover:opacity-70 hover:bg-white">
                            <p className="text-black font-bold text-4xl">{object.price}</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className="bg-blue-700 rounded-md h-10 w-32 font-semibold text-white mt-4">Rent</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Otherbooks;
