import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
} from '../redax/operations.js';

const contactsInitialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.pending, state => {
        state.loading = true;
      })

      .addCase(fetchAllContacts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload.data;
      })

      .addCase(fetchAllContacts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(fetchAddContact.pending, state => {
        state.loading = true;
      })

      .addCase(fetchAddContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items.push(payload);
      })

      .addCase(fetchAddContact.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(fetchDeleteContact.pending, state => {
        state.loading = true;
      })
      .addCase(fetchDeleteContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        const index = state.items.findIndex(item => item.id === payload);
        state.items.splice(index, 1);
      })

      .addCase(fetchDeleteContact.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
