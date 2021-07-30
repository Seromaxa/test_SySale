import React from "react"
import defStyle from "./newDef.module.css"

export default function New({ style, text }) {
  return (
    <div className={style ? style : defStyle.new}>{text ? text : "new"}</div>
  )
}
