import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts: [],
  
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
            getActionPost: (state, action)=> {
              state.posts =  action.payload.posts
            } 
       
    }
})

export const { getActionPost } = postSlice.actions