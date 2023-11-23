import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
    role: "ADMIN",
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