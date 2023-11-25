import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slides/auth/auth';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  }
});