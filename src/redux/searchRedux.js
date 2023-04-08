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
      },
      loadingFalse: (state) => {
         state.isLoading = false
      },
      loadingTrue: (state) => {
         state.isLoading = true
      }
   }
})

export const { searchInput, loadingFalse, loadingTrue } = searchSlice.actions
export default searchSlice.reducer