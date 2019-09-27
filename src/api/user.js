import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  withCredentials: true,
});

export const getUser = () => instance.get('/currentUser').then(res => res.data);

export const userLogin = user =>
  instance.post('/users/login', user).then(res => res.data);
