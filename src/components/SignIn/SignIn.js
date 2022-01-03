import { Link } from 'react-router-dom';

import TrackItLogo from '../../assets/imgs/TrackIt_logo.png';
import { SCLogo, SCContainer, SCLogin, SCInput, SCWideButton, SCButton } from './SignIn_styles.js';

export default function SignIn() {
  return (
    <SCContainer>
      <SCLogo src={TrackItLogo} />

      <SCLogin>
        <SCInput required type="text" placeholder="email" />
        <SCInput required type="password" placeholder="senha" />

        <SCWideButton>
          <SCButton type="submit">
            <p>Entrar</p>
          </SCButton>
        </SCWideButton>
        <SCWideButton>
          <Link to="/cadastro">
            <p>Não tem uma conta? Cadastre-se!</p>
          </Link>
          {/* isLoading... */}
        </SCWideButton>
      </SCLogin>

      </SCContainer>
  );
}



