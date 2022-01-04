import { SCNewHabit, SCWeekdayButtons } from "./Habits_styles.js";

export default function NewHabit() {
  return (
    <SCNewHabit>
      <input required
        type="text"
        placeholder="nome do hábito" />
      <SCWeekdayButtons>
        <input type="button"
          value="D"
          name="sunday" />
        <input type="button"
          value="S"
          name="monday" />
        <input type="button"
          value="T"
          name="tuesday" />
        <input type="button"
          value="Q"
          name="wednesday" />
        <input type="button"
          value="Q"
          name="thursday" />
        <input type="button"
          value="S"
          name="friday" />
        <input type="button"
          value="S"
          name="saturday" />
      </SCWeekdayButtons>

    </SCNewHabit>
  );
}

