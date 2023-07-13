import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  title: '',
  content: '',
};

const counterSlice = createSlice({
  name: 'WriteModule',
  initialState,
  reducers: {
    CHANGE_TITLE: (state, action) => {
      state.email = action.payload;
    },
    CHANGE_CONTENT: (state, action) => {
      state.content = action.payload;
    },
    CLEAR: (state, action) => {
      state.title = '';
      state.content = '';
    },
  },
});
export default counterSlice.reducer;
export const { CHANGE_TITLE, CHANGE_CONTENT, CLEAR } = counterSlice.actions;
