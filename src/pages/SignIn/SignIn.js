import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { LoggedUserContext } from '../../contexts/LoggedUserContext.js';
import api from '../../services/apiTrackIt.js';
import TrackItLogo from '../../assets/imgs/TrackIt_logo.png';
import { Logo, Container, LoginForm, Input, WideButton, Button } from '../../components/SignUser/SignUser_styles.js';

export default function SignIn() {
  const { loggedUser, setLoggedUser } = useContext(LoggedUserContext);
  const [localFormData, setLocalFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  function updateLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function signInUser(event) {
    event.preventDefault();

    const loginPromise = api.authenticateUser(localFormData);
    loginPromise.then( response => {
      console.log(response.data);
      alert(`Seja bem vindo(a) ${response.data.name}!`);
      
      updateLocalStorage("userToken", response.data.token);
      updateLocalStorage("userImage", response.data.image);
      alert("navigate('/hoje')");
    });
    loginPromise.catch(error => {
      alert(`${error.response.data.message}\nVerifique os dados preenchidos`);
    });
  }

  function handleFormChange(event) {
    setLocalFormData({ ...localFormData, [event.target.name]: event.target.value });
  };


  return (
    <Container>
      <Logo src={TrackItLogo} />

      <LoginForm onSubmit={signInUser}>
        <Input
          required
          type="email"
          placeholder="email"
          name="email"
          value={localFormData.email}
          onChange={handleFormChange}
        />
        <Input
          required
          type="password"
          placeholder="senha"
          name="password"
          value={localFormData.password}
          onChange={handleFormChange}
        />

        <WideButton>
          <Button type="submit">
            <p>Entrar</p>
          </Button>
        </WideButton>

        <WideButton>
          <Link to="/cadastro">
            <p>Não tem uma conta? Cadastre-se!</p>
          </Link>
        </WideButton>
      </LoginForm>

    </Container>
  );
}