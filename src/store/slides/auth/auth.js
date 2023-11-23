import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: true,
    role: "MEMBER",
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuthenticated: (state) => {
            state.isAuthenticated = !state.isAuthenticated
        }
    }
})

export const { setIsAuthenticated } = authSlice.actions