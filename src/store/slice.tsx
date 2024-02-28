import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Item {
  preco: number;
  id: number;
}

interface CartState {
  items: Item[];
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  } as CartState,
  reducers: {
    addItem(state, action: PayloadAction<Item>) { 
      const { id } = action.payload;
      
      const itemExists = state.items.some(item => item.id === id)
      if (itemExists) {
        alert("Produto já adicionado ao carrinho.")
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem(state, action: PayloadAction<{ id: number }>) { 
      state.items = state.items.filter(item => item.id !== action.payload.id)
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer
