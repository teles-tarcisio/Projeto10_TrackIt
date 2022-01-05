import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import SignUser from './components/SignUser/SignUser.js';
import Habits from './components/Habits/Habits.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" 
          element={<SignUser isNewUser={false} />}
        />

        <Route path="/cadastro"
          element={<SignUser isNewUser={true} />}
        />
        
        <Route path="/habitos"
          element={<Habits />}
        />

      </Routes>    
    </BrowserRouter>   
  );
}