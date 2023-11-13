import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload)
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload)
    },
    incCount(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload)
      item.quantity++
    },
    decCount(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload)
      item.quantity++
      item.totalPrice = item.quantity * item.unitPrice
    },
    clearCart(state) {
      state.cart = []
    },
  },
})
export const {addItem, deleteItem, incCount, decCount, clearCart} =
  cartSlice.actions
export default cartSlice.reducer
