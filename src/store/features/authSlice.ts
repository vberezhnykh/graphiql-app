import { createSlice } from '@reduxjs/toolkit';

type AuthState = {
  userName: string;
};

const initialState: AuthState = {
  userName: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveUserName(state, { payload }) {
      state.userName = payload;
    },
  },
});

export const authReducer = authSlice.reducer;

export const { saveUserName } = authSlice.actions;
