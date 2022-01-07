import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import TrackItLogo from '../../assets/imgs/TrackIt_logo.png';
import { SCLogo, SCContainer, SCLogin, SCInput, SCWideButton, SCButton } from './SignUser_styles.js';


export default function SignIn() {
  const [localData, setLocalData] = useState({ email: "", name: "", image: "", password: "" });

  return (
    <SCContainer>
      <SCLogo src={TrackItLogo} />

      <SCLogin onSubmit={submitUserData}>
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
            <p>testEntrar</p>
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