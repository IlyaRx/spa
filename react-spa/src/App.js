import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/HomePage';
import { Cinema } from './pages/CinemaPage';
import { Work } from './pages/WorkPage';



function App() {
  return (
    <div className='App'>
      <h1>123</h1>
      <Link to='/'>дом </Link>
      <Link to='/work'>работа </Link>
      <Link to='/cinema'>кино</Link>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/work' element={<Work/>}/>
      <Route path='/cinema' element={<Cinema/>}/>
    </Routes>
    </div>
  );
}

export default App;
