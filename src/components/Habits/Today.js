import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';

import { LoggedUserContext } from '../../contexts/contexts.js';

import { SCHeader, SCFooter, SCRoundProgressBar } from './Habits_styles.js';

import HabitsToday from './HabitsToday.js';

const TODAYHABITS_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

function Header({ image }) {
  return (
    <SCHeader>
      <h1>TrackIt</h1>
      <img src={image} alt="user avatar" />
    </SCHeader>
  );
}

function Footer() {
  return (
    <SCFooter>
      <Link to="/habitos">
        <h1>Hábitos</h1>
      </Link>
      <SCRoundProgressBar>
        <Link to="/hoje">
          <h1>Hoje</h1>
        </Link>
      </SCRoundProgressBar>
      <Link to="/historico">
        <h1>Histórico</h1>
      </Link>
    </SCFooter>
  );
}


export default function Today() {
  const {loggedUser} = useContext(LoggedUserContext);
  const [todayHabits, setTodayHabits] = useState([]);

  useEffect( () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`
      }
    };
    const todayPromise = axios.get(TODAYHABITS_URL, config);
    todayPromise.then(response =>
        setTodayHabits(response.data));
    todayPromise.catch(console.log);
  } ,[])




  return (
    <>
      <Header image={loggedUser.image} />
      
      <HabitsToday habitsArray={todayHabits} setHabitsArray={setTodayHabits}/>

      <Footer />
    </>
  );
}