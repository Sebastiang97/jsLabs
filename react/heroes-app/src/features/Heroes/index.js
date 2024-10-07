import { createSlice } from '@reduxjs/toolkit'

const heoresSlice = createSlice({
  name: 'hero',
  initialState: {
    heroes: [],
    loading: true,
    heroesFav: [],
  },
  reducers: {
    setHeroes: (state, action) => {
      state.heroes = action.payload.heroes
      state.loading = action.payload.loading
    },
    updateHeroes: (state, action) => {
      state.heroes = state.heroes.concat(action.payload.heroes)
    },
    setFavHeroes: (state, action) => {
      state.heroesFav = action.payload
    },
    updateFavHeroes: (state, action) => {
      state.heroesFav = state.heroesFav.concat(action.payload)
    },
    deleteFavHeroes: (state, action) => {
      const id = action.payload
      state.heroesFav = state.heroesFav.filter(({ heroe }) => heroe.id !== id)
    },
    deleteAllHeroesFav: (state, action) => {
      console.log('hi')

      state.heroesFav = []
    },
  },
})

export const {
  setHeroes,
  updateHeroes,
  setFavHeroes,
  updateFavHeroes,
  deleteFavHeroes,
  deleteAllHeroesFav,
} = heoresSlice.actions
export const heroeReducer = heoresSlice.reducer
