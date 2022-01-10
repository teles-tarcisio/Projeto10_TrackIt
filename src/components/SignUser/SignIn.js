import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';

import { LoggedUserContext } from '../../contexts/contexts.js';

import TrackItLogo from '../../assets/imgs/TrackIt_logo.png';

import { SCLogo, SCContainer, SCLogin, SCInput, SCWideButton, SCButton } from './SignUser_styles.js';

const SIGNIN_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";


export default function SignIn() {
  const { loggedUser, setLoggedUser } = useContext(LoggedUserContext);
  const navigate = useNavigate();
  const [localData, setLocalData] = useState({ email: "", password: "" });

  function signInUser(event) {
    event.preventDefault();

    const signInPromise = axios.post(SIGNIN_URL, localData);
    signInPromise.then(response => {
      setLoggedUser({ ...loggedUser,
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
        image: response.data.image,
        token: response.data.token });
      alert(`Seja bem vindo(a) ${response.data.name}!`);
      localStorage.setItem("userToken", response.data.token);
      navigate('/hoje');
    });
    signInPromise.catch(error => {
      alert(`${error.response.data.message}\nVerifique os dados preenchidos`);
    });
  }

  function updateLocalData(newData, field) {
    setLocalData({ ...localData, [`${field}`]: newData });
  };


  return (
    <SCContainer>
      <SCLogo src={TrackItLogo} />

      <SCLogin onSubmit={signInUser}>
        <SCInput required type="email" placeholder="email"
          value={localData.email}
          onChange={(event) => updateLocalData(event.target.value, 'email')}
        />
        <SCInput required type="password" placeholder="senha"
          value={localData.password}
          onChange={(event) => updateLocalData(event.target.value, 'password')}
        />

        <SCWideButton>
          <SCButton type="submit">
            <p>Entrar</p>
          </SCButton>
        </SCWideButton>

        <SCWideButton>
          <Link to="/cadastro">
            <p>Não tem uma conta? Cadastre-se!</p>
          </Link>
        </SCWideButton>
      </SCLogin>

    </SCContainer>
  );
}