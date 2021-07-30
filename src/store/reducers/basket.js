import { createSlice } from "@reduxjs/toolkit"

const basket = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    addItem(state, actions) {
      return [...state, actions.payload]
    },
  },
})
export default basket.reducer
export const { addItem } = basket.actions
