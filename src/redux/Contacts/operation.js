import { getContacts, addContacts, deleteContacts, postNewUser } from './API';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
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

export const addContact = createAsyncThunk(
  'contacts/fetchAddContact',
  async (data, thunkAPI) => {
    try {
      const result = await addContacts(data);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/fetchDeleteContact',
  async (id, thunkAPI) => {
    try {
      await deleteContacts(id);
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
