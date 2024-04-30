import React, { useState } from 'react';
import axios from 'axios';
import Api from './api';

const BookRentingForm = () => {
  const [username, setUserName] = useState('');
  const [useremail, setUserEmail] = useState('');
  const [bookname, setBookTitle] = useState('');
  const [admin, setAdminName] = useState('');
  const [author, setAuthorName] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const getResponse = await axios.get(`${Api}/delete/${bookname}`);
      if (getResponse.status === 200) {
        const response = await axios.post(`${Api}/user`, {
          username,
          useremail,
          bookname,
          admin,
          author,
        });
        if (response.status === 200) {
          setSuccessMessage('Book rented successfully');
          setUserName('');
          setUserEmail('');
          setBookTitle('');
          setAdminName('');
          setAuthorName('');
          setError('');
        } else {
          throw new Error(response.data.message);
        }
      } else {
        setError('Book not found');
      }
    } catch (error) {
      console.error('Error:', error.message);
      setError(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Rent a Book</h2>
      {error && <div className="text-red-500 mb-4">Book not found</div>}
      {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">User Name:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <div>
          <label className="block">User Email:</label>
          <input
            type="email"
            value={useremail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <div>
          <label className="block">Book Title:</label>
          <input
            type="text"
            value={bookname}
            onChange={(e) => setBookTitle(e.target.value)}
            required
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <div>
          <label className="block">Admin Name:</label>
          <input
            type="text"
            value={admin}
            onChange={(e) => setAdminName(e.target.value)}
            required
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <div>
          <label className="block">Author Name:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthorName(e.target.value)}
            required
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Rent</button>
      </form>
    </div>
  );
};

export default BookRentingForm;
