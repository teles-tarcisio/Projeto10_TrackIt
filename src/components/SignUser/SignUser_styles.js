import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #FFFFFF;
`;

const Logo = styled.img`
  margin: 68px auto 32px auto;
  width: 180px;
  height: 180px;
` ;

const LoginForm = styled.form`
  width: 303px;
  height: 90%;
  margin: 0 auto auto auto;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  margin: 3px auto;
  font-size: 20px;
  line-height: 25px;
  color: #DBDBDB;
  border-color: #DBDBDB;
  border-radius: 5px;
`;

const WideButton = styled.div`
  width: 100%;
  height: 45px;
  margin: 3px auto;
  display: flex;
  line-height: 26px;
  & a {
    margin: auto;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-decoration-line: underline;
    color: #52B6FF;
  }
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #52B6FF;
  border-radius: 5px;
  color: white;
  font-size: 21px;
  border: none;
`;

export { Container, Logo, LoginForm, Input, WideButton, Button };