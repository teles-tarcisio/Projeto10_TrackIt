import axios from 'axios';

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/";

function authenticateUser(userData) {
  const authPromise = axios.post(BASE_URL + 'auth/login', userData);
  return authPromise;
}

function registerNewUser(newUserData) {
  const signUpPromise = axios.post(BASE_URL + '/auth/sign-up', newUserData);
  return signUpPromise;
}


const api = {
  authenticateUser,
  registerNewUser
}

export default api;