import React, { useState } from "react";
import { SCNewHabitCard, SCHabitName, SCWeekButtons, SCWeekdayButton, SCActionButtons, SCSimpleButton } from "./Habits_styles.js";


export default function NewHabit({hidden}) {
  const [newHabit, setNewHabit] = useState({ name: "", days: [] });

  const weekButtonsArray = [
    { weekDay: 'D', selected: false },
    { weekDay: 'S', selected: true },
    { weekDay: 'T', selected: false },
    { weekDay: 'Q', selected: false },
    { weekDay: 'Q', selected: true },
    { weekDay: 'S', selected: false },
    { weekDay: 'S', selected: false }
  ];

  return (
    <SCNewHabitCard>
      <SCHabitName required
        type="text"
        placeholder=" nome do hábito"
        value={newHabit.name}
        onChange={(e) => setNewHabit({ ...newHabit, name: e.target.value })}
      />
      <SCWeekButtons>
        {weekButtonsArray.map((day, index) => (
          <SCWeekdayButton
            name={index} selected={day.selected}
            onClick={(e) => console.log(e.target.name)}>
            {day.weekDay}
          </SCWeekdayButton>))}
      </SCWeekButtons>

      <SCActionButtons>
        <SCSimpleButton
          whiteFont={false}
          onClick={() => hidden(false)}>
            <h1>Cancelar</h1>
        </SCSimpleButton>
        <SCSimpleButton
          whiteFont={true}
          blueButton={true}
          onClick={() => console.log("salvar")}>
            <h1>Salvar</h1>
        </SCSimpleButton>
      </SCActionButtons>

    </SCNewHabitCard>
  );
}