import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import { LoggedUserContext, HabitsContext } from './contexts/contexts.js';

import SignIn from './components/SignUser/SignIn.js';
import SignUp from './components/SignUser/SignUp.js';
import Today from './components/Habits/Today.js';
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

  const [userHabits, setUserHabits] = useState([]);


  return (
    <BrowserRouter>
      <LoggedUserContext.Provider value={{ loggedUser, setLoggedUser }} >
        <HabitsContext.Provider value={{ userHabits, setUserHabits }} >
          <Routes>
            <Route path="/"
              element={<SignIn />} />

            <Route path="/cadastro"
              element={<SignUp />} />

            <Route path="/hoje"
              element={<Today />}
            />
            <Route path="/habitos"
              element={<Habits />} />
          </Routes>
        </HabitsContext.Provider>
      </LoggedUserContext.Provider>
    </BrowserRouter >
  );
}