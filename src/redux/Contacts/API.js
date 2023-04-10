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

export const addContacts = async data => {
  const { data: result } = await axiosInstance.post('/contacts', data);

  return result;
};

export const deleteContacts = async id => {
  const { data } = await axiosInstance.delete(`/contacts/${id}`);
  return data;
};

export const postNewUser = async user => {
  const { data } = await axiosInstance.post('/users/signup', user);
  setToken(data.token);

  return data;
};
