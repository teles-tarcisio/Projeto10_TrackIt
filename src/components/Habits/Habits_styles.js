import styled from "styled-components";

const SCHeader = styled.header`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #126BA5;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  & h1 {
    margin: auto auto auto 18px;
    font-family: 'Playball';
    color: #FFFFFF;
    font-size: 39px;
    line-height: 49px;
  }
  & img {
    width: 51px;
    height: 51px;
    margin: auto 18px auto auto;
    border-radius: 99px;
  }
`;

const SCMainContainer = styled.div`
  width: 100vw;
  margin: 92px auto auto auto;
  display: flex;
  flex-direction: column;
`;

const SCHabitsTopBar = styled.div`
  height: 35px;
  margin: auto 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h1 {
    color: #126BA5;
    font-size: 23px;
    line-height: 29px;
  }
`;

const SCSimpleButton = styled.button`
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & h1 {    
    font-size: 27px;
    line-height: 34px;
    color: #FFFFFF;
  }
  border: none;
  border-radius: 5px;
  background-color: #52B6FF;
`;

const SCHabitsList = styled.ul`
  margin: 22px 18px 10px 18px;
  border-radius: 5px;
  & p {
    font-size: 18px;
    line-height: 23px;
    color: #666666;
  }
`;

const SCFooter = styled.footer`
  width: 100%;
  height: 70px;
  position: fixed;
  bottom: 0;
  left: 0;
  margin: auto auto auto 0;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  & h1 {
    font-size: 18px;
    line-height: 22px;
    color: #52B6FF;
  }
`;

const SCRoundProgressBar = styled.div`
  width: 91px;
  height: 91px;
  margin-bottom: 22px;
  border-radius: 50%;
  background-color: #52B6FF;
  display: flex;
  justify-content: center;
  align-items: center;
  & h1 {
    color: #FFFFFF;
  }
`;

const SCNewHabit = styled.form`
  height: 180px;
  margin: 0 auto 30px auto;
  padding: 18px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

const SCWeekdayButtons = styled.div`
  display: flex;
  margin: auto;


`;

export { SCHeader, SCFooter, SCRoundProgressBar, SCHabitsList, SCMainContainer, SCHabitsTopBar,SCSimpleButton, SCNewHabit, SCWeekdayButtons };