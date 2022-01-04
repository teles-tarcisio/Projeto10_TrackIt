import { SCHeader } from "./Habits_styles.js";

export default function Header({image}) {
  return (
    <SCHeader>
      <h1>TrackIt</h1>
      <img src={image} alt="user avatar" />
    </SCHeader>
  );
}
