import React, { useState } from 'react';
import NewHabit from './NewHabit.js';
import { SCHabitsList, SCMainContainer, SCHabitsTopBar, SCSimpleButton, SCHabitCard, SCWeekButtons, SCWeekdayButton } from "./Habits_styles.js";

export default function MyHabits({ habitsArray }) {
  const [showNewHabit, setShowNewHabit] = useState(false);

  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

  return (
    <SCMainContainer>
      <SCHabitsTopBar>
        <h1>Meus Hábitos</h1>
        <SCSimpleButton
          whiteFont={true}
          blueButton={true}
          onClick={() => setShowNewHabit(true)}>
          <h1>+</h1>
        </SCSimpleButton>
      </SCHabitsTopBar>

      <SCHabitsList>
        {showNewHabit && <NewHabit hidden={setShowNewHabit} />}
        {habitsArray.length === 0 ?
          <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
          :
          habitsArray.map((habit, index) => (
            <SCHabitCard key={index} id={index}>
              <p>{habit.name}</p>
              <SCWeekButtons>
                {weekDays.map((day, index) => (
                  <SCWeekdayButton name={index} >
                    {day}
                  </SCWeekdayButton>))}
              </SCWeekButtons>
            </SCHabitCard>))
        }
      </SCHabitsList>
    </SCMainContainer>
  );
}