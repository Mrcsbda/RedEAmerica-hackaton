import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
  copyPost: []
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getActionPost: (state, action) => {
      state.posts = action.payload.posts
      state.copyPost = action.payload.posts
    },
    filterByCountry: (state, action) => {
      state.copyPost = state.posts.filter((post) => {
        return post.country.toLowerCase() === action.payload
      })
    },
    filterByCategory: (state, action) => {
      state.copyPost = state.posts.filter((post) => {
        return post.category === action.payload;
      });
    },
    filterByTypeFormat: (state, action) => {
      state.copyPost = state.posts.filter((post) => {
        return post.typeFormat === action.payload;
      });
    },
    filterBySearch: (state, action) => {
      const searchQuery = action.payload.toLowerCase(); // Convertir a minúsculas para hacer la comparación insensible a mayúsculas
      state.copyPost = state.posts.filter((post) => {
        const titleMatch = post.title.toLowerCase().includes(searchQuery);
        const contentMatch = post.content.toLowerCase().includes(searchQuery);
        return titleMatch || contentMatch;
      });
    }



  }
})

export const { getActionPost, filterByCountry, filterByCategory, filterByTypeFormat, filterBySearch } = postSlice.actions