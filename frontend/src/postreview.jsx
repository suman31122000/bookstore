import React, { useState } from 'react';
import axios from 'axios';
import { redirect } from 'react-router-dom';
import Api from './api';

const PostComment = () => {
    const [formData, setFormData] = useState({
        name: '',
        bookname: '',
        comment: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${Api}/comment`, formData); 
            alert('Comment posted successfully!');
            
            setFormData({ name: '', bookname: '', comment: '' });
            redirect('/');
        } catch (error) {
            console.error('Error posting comment:', error);
            alert('Failed to post comment. Please try again later.');
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4">Post a Comment</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Book Name:</label>
                    <input type="text" name="bookname" value={formData.bookname} onChange={handleChange} className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Comment:</label>
                    <textarea name="comment" value={formData.comment} onChange={handleChange} className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
                </div>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
            </form>
        </div>
    );
};

export default PostComment;
