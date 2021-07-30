import React from "react"
import { useSelector } from "react-redux"
import Card from "./conteiners/card"
import style from "./assets/styles/root.module.css"

function App() {
  const products = useSelector((state) => state.shop)
  return (
    <ul className={style["root_list"]}>
      {products.map((item) => (
        <li
          key={`${item.name} + ${item.id}`}
          className={style["root_list_item"]}
        >
          <Card product={item} />
        </li>
      ))}
    </ul>
  )
}

export default App
