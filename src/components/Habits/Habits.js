
import UserAvatar from '../../assets/imgs/spongebob.png';
import Header from './Header.js';
import MyHabits from './MyHabits.js';
import Footer from './Footer.js';



export default function Habits() {
  return (
    <>
      <Header image={UserAvatar} />

      <MyHabits />      

      <Footer />
    </>
  );
}