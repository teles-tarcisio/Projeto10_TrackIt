import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';

import { LoggedUserContext, HabitsContext } from '../../contexts/contexts.js';

import { SCHeader, SCFooter, SCRoundProgressBar } from './Habits_styles.js';

import MyHabits from './MyHabits.js';

const HABITS_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

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

export default function Habits() {
  const { loggedUser} = useContext(LoggedUserContext);
  const { userHabits, setUserHabits } = useContext(HabitsContext);

  useEffect( () => {
    const config = {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTM3NCwiaWF0IjoxNjQxNzU0OTc3fQ.Gp0BwiBEGaEt_i1Ljsode1CTxL7E8-e49Ip8cn5RvUw"
      }
    };
    const habitsPromise = axios.get(HABITS_URL, config);
    habitsPromise.then(response => setUserHabits(response.data));
  }, []);
    
  return (
    <>
      <Header image={loggedUser.image} />

      <MyHabits habitsArray={userHabits}/>

      <Footer />
    </>
  );
}