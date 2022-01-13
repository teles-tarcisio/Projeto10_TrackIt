import axios from 'axios';
import React, { useState, useEffect } from "react";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';


import { SCMainContainer } from "../Habits/Habits_styles.js";
import { SCTodayTopBar, SCTodayHabits, SCTodayHabitCard, SCCheckButton } from "./Today_styles.js";

import { BsFillCheckSquareFill } from "react-icons/bs";

const HABITS_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

export default function HabitsToday() {
  const [habitsArray, setHabitsArray] = useState([]);
  function toggleDone(event) {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`
      }
    };
    const habitID = event.target.id;
    const donePromise = axios.post(HABITS_URL + `/${habitID}/check`, {}, config);
    donePromise.then(console.log);
    donePromise.catch(console.log);
  }

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`
      }
    };
    const todayPromise = axios.get(HABITS_URL + '/today', config);
    todayPromise.then(response =>
      setHabitsArray(response.data));
    todayPromise.catch(console.log);
  }, []);

  return (
    <SCMainContainer>
      <SCTodayTopBar>
        <h1>
          {dayjs().locale("pt-br").format('dddd')}
          {", " + dayjs().locale('pt-br').format('DD/MM')}
        </h1>
        <h2>Nenhum hábito concluído ainda</h2>
      </SCTodayTopBar>

      <SCTodayHabits>
        {habitsArray.map((habit) => (
          <SCTodayHabitCard key={habit.id} id={habit.id} onClick={toggleDone}>
            <h1>{habit.name}</h1>
            <p>Sequência atual: {habit.currentSequence} dias</p>
            <p>Seu recorde: {habit.highestSequence} dias</p>
            <SCCheckButton done={habit.done} >
              <BsFillCheckSquareFill />
            </SCCheckButton>
          </SCTodayHabitCard>
        ))
        }
      </SCTodayHabits>
    </SCMainContainer >
  );
}