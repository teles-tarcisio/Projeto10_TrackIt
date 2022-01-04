import styled from "styled-components";

const SCHeader = styled.header`
  width: 100%;
  height: 70px;
  position: absolute;
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
  width: 100%;
  height: calc(100% - 140px);
  margin: 92px auto;
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
  margin: 22px 18px auto 18px;
  border-radius: 5px;
  border: 2px dashed;
  & p {
    font-size: 18px;
    line-height: 23px;
    color: #666666;
  }
`;

const SCNewHabit = styled.li`
  height: 180px;
  margin: 0 auto 30px auto;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const SCFooter = styled.footer`
  width: 100%;
  height: 70px;
  position: absolute;
  left: 0;
  bottom: 0;
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

export { SCHeader, SCFooter, SCRoundProgressBar, SCHabitsList, SCMainContainer, SCHabitsTopBar,SCSimpleButton, SCNewHabit};