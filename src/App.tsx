import React from 'react';
import './App.css';
import { Home } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <h1>Welcome to React Router!</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='about' element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
