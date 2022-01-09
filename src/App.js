import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import { LoggedUserContext } from './contexts/contexts.js';

import SignIn from './components/SignUser/SignIn.js';
import SignUp from './components/SignUser/SignUp.js';
import Habits from './components/Habits/Habits.js';

export default function App() {
  const [loggedUser, setLoggedUser] = useState(
    {
      id: -1,
      name: "",
      email: "",
      image: "",
      token: ""
    }
  );


  return (
    <BrowserRouter>
      <LoggedUserContext.Provider value={{ loggedUser, setLoggedUser }} >
        {console.log('no App.js: ', loggedUser)}
        <Routes>
          <Route path="/"
            element={<SignIn />}
          />

          <Route path="/cadastro"
            element={<SignUp />}
          />

          <Route path="/habitos"
            element={<Habits />}
          />
        </Routes>
      </LoggedUserContext.Provider>
    </BrowserRouter>
  );
}