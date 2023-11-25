import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
    userLogged: null,
    role: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuthenticated: (state) => {
            state.isAuthenticated = !state.isAuthenticated
        },
        setUserLogged: (state, action) => {
            state.userLogged = action.payload;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        }
    }
})

export const { setIsAuthenticated, setUserLogged, setRole } = authSlice.actions