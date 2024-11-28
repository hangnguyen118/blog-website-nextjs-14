import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  email: '',
  image: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.image = action.payload.image.url;
    },
    clearUser(state) {
      state.username = '';
      state.email = '';
      state.image = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
