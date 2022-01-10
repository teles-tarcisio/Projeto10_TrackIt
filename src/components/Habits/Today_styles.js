import styled from "styled-components";
import { BsFillCheckSquareFill } from "react-icons/bs";

const SCTodayTopBar = styled.div`
  height: 51px;
  margin: auto 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  & h1 {
    color: #126BA5;
    font-size: 23px;
    line-height: 29px;
  }
  & h2 {
    color: #BABABA;
    font-size: 18px;
    line-height: 23px;
  }
`;

const SCTodayHabits = styled.ul`
  margin: 22px 18px 10px 18px;
  border-radius: 5px;
`;

const SCTodayHabitCard = styled.li`
  height: 94px;
  margin: 0 auto 10px auto;
  padding: 12px 12px 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  background-color: #FFFFFF;
  border-radius: 5px;
  position: relative;
  & h1 {
    font-size: 20px;
    line-height: 25px;
    color: #666666;
  }
  & p {
    font-size: 13px;
    line-height: 16px;
    color: #666666;
  }
`;

const SCCheckButton = styled.button`
  width: 78px;
  height: 72px;
  position: absolute;
  top: 13px;
  right: 13px;
  font-size: 69px;
  background: none;
  border: none;
  color: ${props => props.done ? '#8FC549' : '#EBEBEB'};
`;

export { SCTodayTopBar, SCTodayHabits, SCTodayHabitCard, SCCheckButton };