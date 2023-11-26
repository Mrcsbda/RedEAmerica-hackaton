import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slides/auth/auth';
import { postSlice } from './slides/posts/postsThunk';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    posts: postSlice.reducer,
  }
});