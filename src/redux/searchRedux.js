import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
   name: 'search',
   initialState: {
      search: '',
      isLoading: true
   },
   reducers: {
      searchInput: (state, action) => {
         state.search = action.payload
         state.isLoading = true
      },
      loadingFalse: (state) => {
         state.isLoading = false
      }
   }
})

export const { searchInput } = searchSlice.actions
export default searchSlice.reducer