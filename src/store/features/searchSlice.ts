import { createSlice } from '@reduxjs/toolkit';

type SearchState = {
  value: string;
};

const initialState: SearchState = {
  value: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    saveValue(state, action) {
      state.value = action.payload;
    },
  },
});

export const searchReducer = searchSlice.reducer;

export const { saveValue } = searchSlice.actions;
