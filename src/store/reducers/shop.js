import { createSlice } from "@reduxjs/toolkit"
import Sham1 from "../../assets/imagen/shamp1.png"
import Sham2 from "../../assets/imagen/shamp2.png"
import Sham3 from "../../assets/imagen/shamp3.png"

const shop = createSlice({
  name: "shop",
  initialState: [
    {
      id: "1",
      new: true,
      selected: false,
      img: Sham1,
      name: "Шампунь",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores numquam voluptas minus animi sed enim ratione tenetur, reprehenderit eius quas veritatis sit neque quibusdam doloribus dolorem inventore? Quidem, ullam tenetur quos voluptate sed ex est autem aliquid iusto eius neque saepe recusandae dignissimos error officia cupiditate maiores maxime. Vitae?",
      price: "1",
    },
    {
      id: "2",
      new: true,
      selected: false,
      img: Sham2,
      name: "Шампунь",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores numquam voluptas minus animi sed enim ratione tenetur, reprehenderit eius quas veritatis sit neque quibusdam doloribus dolorem inventore? Quidem, ullam tenetur quos voluptate sed ex est autem aliquid iusto eius neque saepe recusandae dignissimos error officia cupiditate maiores maxime. Vitae?",
      price: "2",
    },
    {
      id: "3",
      new: true,
      selected: false,
      img: Sham3,
      name: "Шампунь",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores numquam voluptas minus animi sed enim ratione tenetur, reprehenderit eius quas veritatis sit neque quibusdam doloribus dolorem inventore? Quidem, ullam tenetur quos voluptate sed ex est autem aliquid iusto eius neque saepe recusandae dignissimos error officia cupiditate maiores maxime. Vitae?",
      price: "3",
    },
  ],
  reducers: {
    chuseProduct(state, action) {
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, selected: !item.selected }
          : item
      )
    },
  },
})

export default shop.reducer
export const { chuseProduct } = shop.actions
