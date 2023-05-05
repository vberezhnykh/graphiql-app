import { createSlice } from '@reduxjs/toolkit';

type AuthState = {
  userToken: string;
  userName: string;
};

const initialState: AuthState = {
  userToken: sessionStorage.getItem('Auth Token') ?? '',
  userName: sessionStorage.getItem('userName') ?? '',
};

const authSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    saveUserToken(state, action) {
      state.userToken = action.payload;
    },
    saveUserName(state, { payload }) {
      state.userName = payload;
    },
  },
});

export const authReducer = authSlice.reducer;

export const { saveUserToken, saveUserName } = authSlice.actions;
