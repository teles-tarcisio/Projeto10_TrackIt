import { Link } from 'react-router-dom';

import { registerNewUser } from '../../services/apiTrackIt.js';

import TrackItLogo from '../../assets/imgs/TrackIt_logo.png';
import { SCLogo, SCContainer, SCLogin, SCInput, SCWideButton, SCButton } from './SignUser_styles.js';

const newUserData = {
  email: "004@mail.com",
  name: "user001",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
  password: "001"
};


function UserForm({isNewUser}) {

  function testNewUser() {
    return registerNewUser(newUserData); 
  };

  return (
    <SCLogin>
        <SCInput required type="text" placeholder="email" />
        <SCInput required type="password" placeholder="senha" />

        {isNewUser && <SCInput required type="text" placeholder="nome" />}
        {isNewUser && <SCInput required type="url" placeholder="foto" /> }
        
        <SCWideButton>
          {/* <SCButton type="submit"> */}
          <SCButton type="button" onClick={() => console.log(testNewUser())}>
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


export default function SignUser({isNewUser}) {
  return (
    <SCContainer>
      <SCLogo src={TrackItLogo} />

      <UserForm isNewUser={isNewUser} />
    </SCContainer>
  );
}