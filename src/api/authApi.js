import axios from 'axios'

const API = axios.create({ baseURL: 'https://nutrition-tracker-backend.herokuapp.com' });



export const logIn = (data) => API.post('/user/signin', data);
export const signUp = (data) => API.post('/user/signup', data);
export const saveData = (data) => API.post('/user/saveData', data);