import { SCFooter, SCRoundProgressBar } from "./Habits_styles.js";

export default function Footer() {
  return (
    <SCFooter>
      <h1>Hábitos</h1>
      <SCRoundProgressBar>
        <h1>Hoje</h1>
      </SCRoundProgressBar>
      <h1>Histórico</h1>
    </SCFooter>
  );
}

