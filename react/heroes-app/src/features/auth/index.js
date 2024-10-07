import { createSlice } from '@reduxjs/toolkit'
export * from './signInWithGoogle.js'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    logged: false,
    user: {},
  },
  reducers: {
    signIn: function (state, action) {
      state.logged = true
      state.user = action.payload.user
    },
    logout: function (state, action) {
      state.logged = false
      state.user = {}
    },
  },
})

export const { signIn, logout } = authSlice.actions
export const authReducer = authSlice.reducer
