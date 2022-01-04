import { SCNewHabitCard, SCHabitName, SCWeekButtons, SCWeekdayButton, SCActionButtons } from "./Habits_styles.js";


export default function NewHabit() {
  return (
    <SCNewHabitCard>
      <SCHabitName required
        type="text"
        placeholder=" nome do hábito" />
      <SCWeekButtons>
        <SCWeekdayButton name="1" onClick={(e) => console.log(e.target.name)}>D</SCWeekdayButton>

        <SCWeekdayButton name="2">S</SCWeekdayButton>
        <SCWeekdayButton name="3">T</SCWeekdayButton>
        <SCWeekdayButton name="4">Q</SCWeekdayButton>
        <SCWeekdayButton name="5">Q</SCWeekdayButton>
        <SCWeekdayButton name="6">S</SCWeekdayButton>
        <SCWeekdayButton name="7">S</SCWeekdayButton>
      </SCWeekButtons>

      <SCActionButtons>
        <SCWeekdayButton>Cancelar</SCWeekdayButton>
        <SCWeekdayButton>Salvar</SCWeekdayButton>
      </SCActionButtons>

    </SCNewHabitCard>
  );
}