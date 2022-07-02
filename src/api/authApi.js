import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' });

/*API.interceptors.request.use((req) => {
  if (localStorage.getItem('user')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
  }

  return req;
});*/

export const logIn = (data) => API.post('/user/signin', data);
export const signUp = (data) => API.post('/user/signup', data);