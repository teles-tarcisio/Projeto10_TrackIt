import React, { useState } from "react";
import { SCMainContainer } from "./Habits_styles.js";
import { SCTodayTopBar, SCTodayHabits, SCTodayHabitCard, SCCheckButton } from "./Today_styles.js";

import {BsFillCheckSquareFill} from "react-icons/bs";


export default function HabitsToday() {

  return (
    <SCMainContainer>
      <SCTodayTopBar>
        <h1>Segunda, 17/05</h1>
        <h2>Nenhum hábito concluído ainda</h2>
      </SCTodayTopBar>

      <SCTodayHabits>

        <SCTodayHabitCard>
          <h1>Ler 1 capítulo de livro</h1>
          <p>Sequência atual: X dias</p>
          <p>Seu recorde: Y dias</p>
          <SCCheckButton>
              <BsFillCheckSquareFill/>
          </SCCheckButton>

        </SCTodayHabitCard>


        <SCTodayHabitCard>
        </SCTodayHabitCard>


      </SCTodayHabits>

    </SCMainContainer>
  );
}