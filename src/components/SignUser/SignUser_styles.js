import styled from 'styled-components';

const SCContainer = styled.div`
  width: 100%;
  margin: 68px auto 200px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const SCLogo = styled.img`
  margin: 0 98px 32px 98px;
  width: 180px;
  height: 180px;
` ;

const SCLogin = styled.form`
  width: 303px;
  height: 90%;
  margin: 0 36px 200px 36px;
  display: flex;
  flex-direction: column;
`;

const SCInput = styled.input`
  width: 100%;
  height: 45px;
  margin: 3px auto;
  font-size: 20px;
  line-height: 25px;
  color: #DBDBDB;
  border-color: #DBDBDB;
  border-radius: 5px;
`;

const SCWideButton = styled.div`
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

const SCButton = styled.button`
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

export { SCContainer, SCLogo, SCLogin, SCInput, SCWideButton, SCButton };