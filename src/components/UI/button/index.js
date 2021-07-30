import React from "react"

export default function Button({ onClick, style, text }) {
  return (
    <button className={style} onClick={onClick}>
      {text}
    </button>
  )
}
