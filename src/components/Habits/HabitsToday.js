import axios from 'axios';
import React from "react";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';


import { SCMainContainer } from "./Habits_styles.js";
import { SCTodayTopBar, SCTodayHabits, SCTodayHabitCard, SCCheckButton } from "./Today_styles.js";

import { BsFillCheckSquareFill } from "react-icons/bs";

const HABITS_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

// /ID_DO_HABITO/check

export default function HabitsToday({ habitsArray, setHabitsArray }) {

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