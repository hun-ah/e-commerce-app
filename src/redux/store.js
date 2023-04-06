import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartRedux'
import userReducer from './userRedux'
import searchRedux from './searchRedux'

export default configureStore({
   reducer: {
      cart: cartReducer,
      user: userReducer,
      search: searchRedux
   }
})