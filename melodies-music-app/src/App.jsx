//App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

import Loading from './view-pages/Loading';
import Home from './view-pages/HomePage';
import Login from './view-pages/Login';
import SignUp from './view-pages/SignUp';
import Artist from './view-pages/Artist' ;
import Album from './view-pages/Album';


import PrivateRoute from './routes/PrivateRoute';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/artist" element={<Artist/>}/>
        <Route path="/Album" element={<Album/>}/>
        
      </Routes>
      
    </>
  );
}

export default App;
