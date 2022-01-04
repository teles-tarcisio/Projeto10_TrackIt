import NewHabit from './NewHabit.js';
import { SCHabitsList, SCMainContainer, SCHabitsTopBar, SCSimpleButton, } from "./Habits_styles.js";


export default function MyHabits() {
  return (
    <SCMainContainer>
      <SCHabitsTopBar>
        <h1>Meus Hábitos</h1>
        <SCSimpleButton
          fontColor={"blue"}
          buttonColor={"white"}>
          <h1>+</h1>
        </SCSimpleButton>        
      </SCHabitsTopBar>

      <SCHabitsList>
        <NewHabit />
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
      </SCHabitsList>
    </SCMainContainer>

  );
}