import React, { useState } from 'react';
import axios from 'axios';

const AddBookForm = () => {
    const [bookData, setBookData] = useState({
        name: '',
        description: '',
        author: '',
        image: '',
        price: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData({ ...bookData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/add', bookData);
            alert('Book added successfully!');
            // Clear form fields after submission
            setBookData({
                name: '',
                description: '',
                author: '',
                image: '',
                price: 0
            });
        } catch (error) {
            console.error('Error adding book:', error);
            alert('An error occurred while adding the book.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-slate-200 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Add Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                    <input type="text" name="name" value={bookData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
                    <textarea name="description" value={bookData.description} onChange={handleChange} className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Author:</label>
                    <input type="text" name="author" value={bookData.author} onChange={handleChange} className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Image URL:</label>
                    <input type="text" name="image" value={bookData.image} onChange={handleChange} className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
                    <input type="number" name="price" value={bookData.price} onChange={handleChange} className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500" />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add Book</button>
            </form>
        </div>
    );
};

export default AddBookForm;
