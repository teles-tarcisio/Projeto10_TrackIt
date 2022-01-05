import axios from 'axios';

const API_BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function registerNewUser(newUser) {
  const signUpPromise = axios.post(API_BASE_URL + "/auth/sign-up", newUser);

  signUpPromise.catch(error => {
    console.log('erro signup: ', error.response)
  });

  return signUpPromise.response;
}







export { registerNewUser };