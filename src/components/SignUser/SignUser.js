import { Link } from 'react-router-dom';

import TrackItLogo from '../../assets/imgs/TrackIt_logo.png';
import { SCLogo, SCContainer, SCLogin, SCInput, SCWideButton, SCButton } from './SignUser_styles.js';

function UserForm({isNewUser}) {
  return (
    <SCLogin>
        <SCInput required type="text" placeholder="email" />
        <SCInput required type="password" placeholder="senha" />

        {isNewUser && <SCInput required type="text" placeholder="nome" />}
        {isNewUser && <SCInput required type="url" placeholder="foto" /> }
        
        <SCWideButton>
          <SCButton type="submit">
            {isNewUser ? <p>Cadastrar</p> : <p>Entrar</p>}
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

export default function SignUser({isNewUser}) {
  return (
    <SCContainer>
      <SCLogo src={TrackItLogo} />

      <UserForm isNewUser={isNewUser} />
    </SCContainer>
  );
}