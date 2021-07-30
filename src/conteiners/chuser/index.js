import React from "react"
import Button from "../../components/UI/button"
import { ReactComponent as Tada } from "../../assets/imagen/Tada.svg"
import { ReactComponent as Vector } from "../../assets/imagen/Vector.svg"
import style from "./chuser.module.css"

export default function Chuser({ chuse, onClick }) {
  return (
    <Button
      onClick={onClick}
      style={style.circle}
      text={chuse ? <Tada /> : <Vector />}
    />
  )
}
