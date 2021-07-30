import React from "react"
import style from "./input.module.css"

export default function Input({ type, name, text, selected, onChange }) {
  const htmlFor = `${Math.random()}`
  return (
    <div className={style.wrapper}>
      <input
        id={htmlFor}
        className={style.input}
        type={type}
        name={name}
        defaultChecked={selected}
        onChange={onChange}
      />
      <label className={style.label} htmlFor={htmlFor}>
        {text}
      </label>
    </div>
  )
}
