import React, { useEffect } from 'react';
import './App.css';
import { Home, BookDetail } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:page' element={<Home />} />
          <Route path='/book/:id' element={<BookDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
