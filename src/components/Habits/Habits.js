
import UserAvatar from '../../assets/imgs/spongebob.png';
import { SCHeader, SCFooter, SCRoundProgressBar } from './Habits_styles.js';
import MyHabits from './MyHabits.js';

function Header({image}) {
  return (
    <SCHeader>
      <h1>TrackIt</h1>
      <img src={image} alt="user avatar" />
    </SCHeader>
  );
}

function Footer() {
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


export default function Habits() {
  return (
    <>
      <Header image={UserAvatar} />

      <MyHabits />      

      <Footer />
    </>
  );
}