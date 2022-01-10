import { Link } from 'react-router-dom';
import React, { useContext } from 'react';

import { LoggedUserContext } from '../../contexts/contexts.js';

import { SCHeader, SCFooter, SCRoundProgressBar } from './Habits_styles.js';

import HabitsToday from './HabitsToday.js';


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
  const { loggedUser, setLoggedUser} = useContext(LoggedUserContext);
  return (
    <>
      <Header image={loggedUser.image} />

        <HabitsToday />

      <Footer />
    </>
  );
}