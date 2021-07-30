import React, { useEffect, useState } from "react"
import Button from "../../components/UI/button"
import style from "./counter.module.css"

export default function Counter({ dec, res, reset }) {
  const [count, setCount] = useState(1)
  const incriment = () => {
    setCount((prev) => (prev += 1))
  }
  const decriment = () => {
    setCount((prev) => {
      if (prev === 1) {
        return 1
      } else {
        return (prev -= 1)
      }
    })
  }
  useEffect(() => {
    dec(count)
  }, [count, dec])
  useEffect(() => {
    if (reset) {
      setCount(1)
      res(false)
    }
  }, [reset, res])
  return (
    <div className={style.counter}>
      <Button onClick={decriment} text="-" style={style.counter_button} />
      <span>{count}</span>
      <Button onClick={incriment} text="+" style={style.counter_button} />
    </div>
  )
}
