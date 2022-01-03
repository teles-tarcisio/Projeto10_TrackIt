import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import SignUser from './components/SignUser/SignUser.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUser isNewUser={false} />} />

        <Route path="/cadastro" element={<SignUser isNewUser={true} />} />
        
        

      </Routes>    
    </BrowserRouter>   
  );
}