import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import api from '../../services/apiTrackIt.js';
import TrackItLogo from '../../assets/imgs/TrackIt_logo.png';
import { Logo, Container, LoginForm, Input, WideButton, Button } from '../../components/SignUser/SignUser_styles.js';

export default function SignUp() {
  const [localFormData, setLocalFormData] = useState({ email: '', name: '', image: '', password: '' });
  const navigate = useNavigate();

  function signUpUser(event) {
    event.preventDefault();

    const signUpPromise = api.registerNewUser(localFormData);
    signUpPromise.then( response => {
      console.log(response.data);
      alert('Cadastro efetuado com sucesso! Por favor faça login');
      navigate("/");
    });
    signUpPromise.catch(error => {
      alert(`Erro ao efetuar cadastro:
      ${error.response.data.message}`);
    });
  }

  function handleFormChange(event) {
    setLocalFormData({ ...localFormData, [event.target.name]: event.target.value });
  };


  return (
    <Container>
      <Logo src={TrackItLogo} />

      <LoginForm onSubmit={signUpUser}>
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
        <Input
          required
          type="text"
          placeholder="nome"
          name="name"
          value={localFormData.name}
          onChange={handleFormChange}
        />

        <Input
          required
          type="url"
          placeholder="foto"
          name="image"
          value={localFormData.image}
          onChange={handleFormChange}
        />

        <WideButton>
          <Button type="submit">
            <p>Cadastrar</p>
          </Button>
        </WideButton>
        
        <WideButton>
          <Link to="/">
            <p>Já tem uma conta? Faça login!</p>
          </Link>
        </WideButton>
      </LoginForm>

    </Container>
  );
}