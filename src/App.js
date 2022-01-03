import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import SignIn from './components/SignIn/SignIn.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        
        

      </Routes>    
    </BrowserRouter>   
  );
}