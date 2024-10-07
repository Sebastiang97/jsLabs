import { configureStore } from '@reduxjs/toolkit'
import { heroeReducer } from 'features/Heroes'
import { authReducer } from 'features/auth'

const store = configureStore({
  reducer: {
    auth: authReducer,
    heroes: heroeReducer,
  },
})

export default store
