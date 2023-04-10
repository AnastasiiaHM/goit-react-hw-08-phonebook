import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getContacts,
  addContact,
  deleteContact,
  postNewUser,
  userLogIn,
  getCurrent,
  logOut,
} from '../fetchData';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/fetchAddContact',
  async (data, thunkAPI) => {
    try {
      const result = await addContact(data);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/fetchDeleteContact',
  async (id, thunkAPI) => {
    try {
      await deleteContact(id);
      return id;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchPostNewUser = createAsyncThunk(
  'auth/fetchPostNewUser',
  async (user, thunkAPI) => {
    try {
      return await postNewUser(user);
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchPostUserLogIn = createAsyncThunk(
  'auth/fetchPostUserLogIn',
  async (userData, thunkAPI) => {
    try {
      return await userLogIn(userData);
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchGetCurrent = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    try {
      const { auth } = thunkAPI.getState();

      return await getCurrent(auth.token);
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const fetchLogOut = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      return await logOut();
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
