import axios from 'axios';
import React, { useState } from "react";
import { SCNewHabitCard, SCHabitName, SCWeekButtons, SCWeekdayButton, SCActionButtons, SCSimpleButton } from "./Habits_styles.js";

const HABITS_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

export default function NewHabit({ hidden }) {
  const [newHabit, setNewHabit] = useState({ name: "", days: [] });

  const [frequencyArray, setFrequencyArray] = useState([
    { weekDay: 'D', selected: false },
    { weekDay: 'S', selected: false },
    { weekDay: 'T', selected: false },
    { weekDay: 'Q', selected: false },
    { weekDay: 'Q', selected: false },
    { weekDay: 'S', selected: false },
    { weekDay: 'S', selected: false }
  ]);

  function updateFrequency(event) {
    let auxArray = [...frequencyArray];
    let auxIndex = event.target.name;
    auxArray[auxIndex].selected = !auxArray[auxIndex].selected;
    setFrequencyArray(auxArray);
  }

  function sendNewhabit() {
    if (newHabit.name.trim() === "") {
      alert("Por favor preencha nome do hábito");
      return;
    }
    else {
      const testDays = [];
      frequencyArray.forEach((element, index) => {
        if (element.selected) {
          testDays.push(index)
        };
      }
      );
      setNewHabit({ ...newHabit, days: testDays });

      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`
        }
      };
      const newHabitPromise = axios.post(HABITS_URL, newHabit, config);
      newHabitPromise.then(console.log);
      newHabitPromise.catch(console.log);
    }
  }
  


  return (
    <SCNewHabitCard>
      <SCHabitName required
        type="text"
        placeholder=" nome do hábito"
        value={newHabit.name}
        onChange={(e) => setNewHabit({ ...newHabit, name: e.target.value })}
      />
      <SCWeekButtons>
        {frequencyArray.map((day, index) => (
          <SCWeekdayButton
            name={index} selected={day.selected}
            onClick={updateFrequency}>
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
          onClick={sendNewhabit}>
          <h1>Salvar</h1>
        </SCSimpleButton>
      </SCActionButtons>

    </SCNewHabitCard>
  );
}