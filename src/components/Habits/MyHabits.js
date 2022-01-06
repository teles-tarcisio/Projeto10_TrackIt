//import NewHabit from './NewHabit.js';
import { SCHabitsList, SCMainContainer, SCHabitsTopBar, SCSimpleButton, SCHabitCard } from "./Habits_styles.js";

const habitsArray = [
  {
    name: "nome do hábito 01",
    weekdays: [7, 1] 
  },
  {
    name: "Nome do hábito 02",
    weekdays:[2, 4, 6]
  }
];

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
        {/* <NewHabit /> */}
        {/* <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> */}

        {habitsArray.map((habit, index) => (
                  <SCHabitCard key={index} id={index}>
                    <p>{habit.name}</p>
                   </SCHabitCard>
      ))}
      </SCHabitsList>
    </SCMainContainer>

  );
}