// store.js
import { configureStore } from '@reduxjs/toolkit';
import carrinhoReducer from '../slice';
import removeItemReducer from '../slice'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    removeItem: removeItemReducer
  },
})


export type RootReducer = ReturnType<typeof store.getState>