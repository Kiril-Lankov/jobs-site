// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: null,
  profilePicture: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.userInfo = action.payload.userInfo;
    },
    resetAuth: (state) => {
      state.userInfo = null;
      state.profilePicture = null;
    },
    setProfilePicture: (state, action) => {
      state.profilePicture = action.payload;
    },
  },
});

export const { setAuthData, resetAuth, setProfilePicture } = authSlice.actions;
export default authSlice.reducer;
