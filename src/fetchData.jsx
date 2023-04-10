import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    return (axiosInstance.defaults.headers.authorization = `Bearer ${token}`);
  } else {
    return (axiosInstance.defaults.headers.authorization = '');
  }
};

export const getContacts = async () => {
  const data = await axiosInstance.get('/contacts');

  return data;
};

export const addContact = async data => {
  const { data: result } = await axiosInstance.post('/contacts', data);

  return result;
};

export const deleteContact = async id => {
  const { data } = await axiosInstance.delete(`/contacts/${id}`);
  return data;
};

export const postNewUser = async user => {
  const { data } = await axiosInstance.post('/users/signup', user);
  setToken(data.token);

  return data;
};

export const userLogIn = async userData => {
  const { data } = await axiosInstance.post('/users/login', userData);
  setToken(data.token);
  return data;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await axiosInstance.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logOut = async () => {
  const { data } = await axiosInstance.post('/users/logout');
  setToken();

  return data;
};
