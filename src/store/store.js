import { configureStore, combineReducers } from "@reduxjs/toolkit"
import shop from "./reducers/shop"
import priceList from "./reducers/priceList"
import basket from "./reducers/basket"

const rootReducer = combineReducers({
  shop: shop,
  pricelist: priceList,
  basket: basket,
})

export const store = configureStore({
  reducer: rootReducer,
})
