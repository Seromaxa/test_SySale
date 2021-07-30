import React, { useState, useEffect } from "react"
import style from "./select.module.css"

export default function Select({ color, res, reset }) {
  const [active, setActive] = useState(false)
  const [current, setCurrent] = useState({
    id: 0,
    name: "Цвет",
    selected: true,
  })
  const [colors, setColors] = useState([
    {
      id: "1",
      name: "Желтый",
      selected: false,
    },
    {
      id: "2",
      name: "Красный",
      selected: false,
    },
    {
      id: "3",
      name: "Зеленый",
      selected: false,
    },
  ])
  useEffect(() => {
    colors.map((item) => (item.selected ? setCurrent(item) : item))
  }, [colors])
  useEffect(() => {
    color(current)
  }, [current, color])
  useEffect(() => {
    if (reset) {
      setCurrent({
        id: 0,
        name: "Цвет",
        selected: true,
      })
      setColors((prev) => {
        return [
          ...prev.map((item) => {
            return { ...item, selected: false }
          }),
        ]
      })
      res(false)
    }
  }, [res, reset])
  const activeHandler = () => {
    setActive(!active)
  }
  const clickHandler = (ev) => {
    setColors(
      colors.map((item) =>
        item.id === ev.target.id
          ? { ...item, selected: true }
          : { ...item, selected: false }
      )
    )
    activeHandler()
  }

  return (
    <div className={style.wrapper}>
      <div
        className={`${style.current}  ${active ? style.active : ""}`}
        onClick={activeHandler}
      >
        <span>{current.name}</span>
        <div
          className={`${style.arrow} ${active ? style.on : style.off}`}
        ></div>
      </div>
      <div className={`${style.dropdown} ${active ? style.active : ""}`}>
        <ul
          className={`${style.list}`}
          onMouseLeave={active ? activeHandler : null}
          onClick={clickHandler}
        >
          {colors.map((item) => (
            <li
              key={item.id}
              id={item.id}
              className={`${style.item} ${item.selected ? style.active : ""}`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
