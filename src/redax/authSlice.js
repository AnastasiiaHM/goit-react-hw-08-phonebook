import { createSlice } from '@reduxjs/toolkit';

import {
  fetchPostNewUser,
  fetchPostUserLogIn,
  fetchGetCurrent,
  fetchLogOut,
} from './operations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchPostNewUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPostNewUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLogin = true;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(fetchPostNewUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchPostUserLogIn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPostUserLogIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLogin = true;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(fetchPostUserLogIn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchGetCurrent.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(fetchGetCurrent.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLogin = true;
        state.isRefreshing = false;
        state.user = payload;
      })
      .addCase(fetchGetCurrent.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isRefreshing = false;
        state.error = payload;
      })
      .addCase(fetchLogOut.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLogOut.fulfilled, state => {
        state.isLoading = false;
        state.isLogin = false;
        state.user = {};
        state.token = '';
      })
      .addCase(fetchLogOut.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
