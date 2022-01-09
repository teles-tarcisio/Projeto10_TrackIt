import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';

import { LoggedUserContext } from '../../contexts/contexts.js';

import TrackItLogo from '../../assets/imgs/TrackIt_logo.png';
import { SCLogo, SCContainer, SCLogin, SCInput, SCWideButton, SCButton } from './SignUser_styles.js';

const SIGNUP_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";


export default function SignUp() {
  const { loggedUser, setLoggedUser } = useContext(LoggedUserContext);
  const navigate = useNavigate();
  const [localData, setLocalData] = useState({ email: "", name: "", image: "", password: "" });

  function signUpUser(event) {
    event.preventDefault();

    const signUpPromise = axios.post(SIGNUP_URL, localData);
    signUpPromise.then( response => {
      setLoggedUser({...loggedUser, id:response.data.id, name:response.data.name, email:response.data.email});
      alert('Cadastro efetuado com sucesso! Por favor faça login');
      navigate('/');
    });
    signUpPromise.catch(error => {
      alert("Erro ao efetuar cadastro, VERIFICAR!");
      console.log('erro signup: ', error.response);
    });
  }

  function updateLocalData(newData, field) {
    setLocalData({ ...localData, [`${field}`]: newData });
  };


  return (
    <SCContainer>
      <SCLogo src={TrackItLogo} />

      <SCLogin onSubmit={signUpUser}>
        <SCInput required type="email" placeholder="email"
          value={localData.email}
          onChange={(event) => updateLocalData(event.target.value, 'email')}
        />
        <SCInput required type="password" placeholder="senha"
          value={localData.password}
          onChange={(event) => updateLocalData(event.target.value, 'password')}
        />
        <SCInput required type="text" placeholder="nome"
          value={localData.name}
          onChange={(event) => updateLocalData(event.target.value, 'name')}
        />

        <SCInput required type="url" placeholder="foto"
          value={localData.image}
          onChange={(event) => updateLocalData(event.target.value, 'image')}
        />

        <SCWideButton>
          <SCButton type="submit">
            <p>Cadastrar</p>
          </SCButton>
        </SCWideButton>
        
        <SCWideButton>
          <Link to="/">
            <p>Já tem uma conta? Faça login!</p>
          </Link>
        </SCWideButton>
      </SCLogin>

    </SCContainer>
  );
}