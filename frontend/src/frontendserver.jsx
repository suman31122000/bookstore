import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './home';
import Books from './books';
import AddBookForm from './addbooks';
import PostComment from './postreview';
import Dashboard from './dashboard';

const Server = () => {
    const navigate = useNavigate();

    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/shop' element={<Books/>}/>
            <Route path='/sell' element={<AddBookForm/>}/>
            <Route path='/addcomment' element={<PostComment/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
    );
};

export default Server;
