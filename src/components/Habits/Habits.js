import { Link } from 'react-router-dom';
import React, { useContext } from 'react';

import { LoggedUserContext, HabitsContext } from '../../contexts/contexts.js';

import { SCHeader, SCFooter, SCRoundProgressBar } from './Habits_styles.js';

import MyHabits from './MyHabits.js';

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


let tempUserHabits = [
  {
    id: 8218,
    name: "Hábito 01",
    days: [1,3,5]
  },
  {
    id: 8219,
    name: "Hábito 02",
    days: [5,0,6]
  },
  {
    id: 8222,
    name: "hábito 05",
    days: [0,1,2,3,4,5,6]
  },
  {
    id: 9090,
    name: "hábito 05",
    days: [0,1,2,3,4,5,6]
  },
  {
    id: 8221,
    name: "Hábito 03",
    days: []
  }
];

export default function Habits() {
  const { loggedUser} = useContext(LoggedUserContext);
  const { userHabits, setUserHabits } = useContext(HabitsContext);

  tempUserHabits = [];
  
  
  return (
    <>
      <Header image={loggedUser.image} />

      <MyHabits habitsArray={tempUserHabits}/>

      <Footer />
    </>
  );
}