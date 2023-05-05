import { createSlice } from '@reduxjs/toolkit';

type AuthState = {
  userToken: string;
};

const initialState: AuthState = {
  userToken: sessionStorage.getItem('Auth Token') ?? '',
};

const authSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    saveUserToken(state, action) {
      state.userToken = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;

export const { saveUserToken } = authSlice.actions;
