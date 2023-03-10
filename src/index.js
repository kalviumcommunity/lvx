import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Product from './Product';
import Sell from './Sell';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/product/:id' element={<Product />} />
    <Route path='/sell' element={<Sell/>} />
  </Routes>
  </BrowserRouter>
);
