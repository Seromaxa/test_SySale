import { createSlice } from "@reduxjs/toolkit"

const priceList = createSlice({
  name: "priceList",
  initialState: [
    {
      id: "1",
      costs: [
        { id: "1", litrs: 100, price: 200, select: true },
        { id: "2", litrs: 200, price: 350, select: false },
        { id: "3", litrs: 300, price: 420, select: false },
      ],
    },
    {
      id: "2",
      costs: [
        { id: "1", litrs: 100, price: 150, select: true },
        { id: "2", litrs: 200, price: 220, select: false },
        { id: "3", litrs: 300, price: 380, select: false },
      ],
    },
    {
      id: "3",
      costs: [
        { id: "1", litrs: 100, price: 250, select: true },
        { id: "2", litrs: 200, price: 380, select: false },
        { id: "3", litrs: 300, price: 450, select: false },
      ],
    },
  ],
  reducers: {
    changeCost(state, actions) {
      return state.map((item) =>
        item.id === actions.payload.id
          ? {
              ...item,
              costs: item.costs.map((it) =>
                it[actions.payload.find] === actions.payload.item
                  ? { ...it, select: true }
                  : { ...it, select: false }
              ),
            }
          : { ...item }
      )
    },
  },
})

export default priceList.reducer
export const { changeCost } = priceList.actions
