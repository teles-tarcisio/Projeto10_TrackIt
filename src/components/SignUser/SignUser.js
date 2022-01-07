import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState, useContext } from 'react';

import { LoggedUserContext } from '../../contexts/contexts.js';

import TrackItLogo from '../../assets/imgs/TrackIt_logo.png';
import { SCLogo, SCContainer, SCLogin, SCInput, SCWideButton, SCButton } from './SignUser_styles.js';

const API_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function UserForm({ isNewUser }) {
  const { loggedUser, setLoggedUser } = useContext(LoggedUserContext);
  const [localData, setLocalData] = useState({email: "", name: "", image: "", password: "" });

  function submitUserData(event) {
    event.preventDefault();

    const signUpPromise = axios.post(`${API_URL}/auth/sign-up`, localData);
    signUpPromise.then( response => {
      return response.data;
    });
    signUpPromise.catch(error => {
      console.log('erro signup: ', error.response);
    });
  }

  function updateLocalData(newData, field) {
    setLocalData({...localData, [`${field}`]: newData});
  };

  return (
    <SCLogin onSubmit={submitUserData}>
      <SCInput required type="email" placeholder="email"
        value={localData.email}
        onChange={(event) => updateLocalData(event.target.value, 'email')}
      />
      <SCInput required type="password" placeholder="senha"
        value={localData.password}
        onChange={(event) => updateLocalData(event.target.value, 'password')}
      />

      {isNewUser &&
        <SCInput required type="text" placeholder="nome"
          value={localData.name}
          onChange={(event) => updateLocalData(event.target.value, 'name')}
        />}
      {isNewUser &&
        <SCInput required type="url" placeholder="foto"
          value={localData.image}
          onChange={(event) => updateLocalData(event.target.value, 'image')}
        />}

      <SCWideButton>
        <SCButton type="submit">
          {isNewUser ? <p>testCadastrar</p> : <p>testEntrar</p>}
        </SCButton>
      </SCWideButton>
      <SCWideButton>
        {
          isNewUser ?
            <Link to="/">
              <p>Já tem uma conta? Faça login!</p>
            </Link>
            :
            <Link to="/cadastro">
              <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        }
      </SCWideButton>
    </SCLogin>
  );
}


export default function SignUser({ isNewUser }) {
  return (
    <SCContainer>
      <SCLogo src={TrackItLogo} />

      <UserForm isNewUser={isNewUser} />
    </SCContainer>
  );
}