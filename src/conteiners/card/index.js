import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import New from "../../components/new"
import Chuser from "../chuser"
import Select from "../../components/UI/select"
import Input from "../../components/UI/input"
import Counter from "../counter"
import { chuseProduct } from "../../store/reducers/shop"
import { changeCost } from "../../store/reducers/priceList"
import { addItem } from "../../store/reducers/basket"
import style from "./card.module.css"
import Button from "../../components/UI/button"

export default function Card({ product }) {
  const dispatch = useDispatch()
  const prices = useSelector((state) => state.pricelist)
  const [cost, setCost] = useState()
  const [litrs, setlitrs] = useState()
  const [color, setColor] = useState()
  const [count, setCount] = useState()
  const [reset, setReset] = useState(false)
  useEffect(() => {
    let current = prices.filter((item) => item.id === product.price)
    let price = current[0].costs.filter((item) => item.select === true)
    setCost(price[0].price)
    setlitrs(...current)
  }, [product, prices])

  const setPrice = (ev) => {
    let current = prices.filter((item) => item.id === product.price)
    let price = current[0].costs.filter((item) => item.select === true)[0].price
    setCost(price * ev)
    setCount(ev)
  }
  const getColor = (ev) => {
    setColor(ev)
  }
  const submitHandler = () => {
    let current = prices.filter((item) => item.id === product.price)
    let currentLitrs = current[0].costs.filter(
      (item) => item.select === true
    )[0]
    dispatch(
      addItem({
        color: color,
        quantity: count,
        currentLitrs: currentLitrs,
        item: product,
        price: cost,
      })
    )
    setReset(true)
    dispatch(changeCost({ id: litrs.id, item: 100, find: "litrs" }))
  }
  const getReset = (ev) => {
    setReset(ev)
  }

  return (
    <div className={style.card}>
      <div className={style.bord}>
        <New />
        <div className={style["img_wrapper"]}>
          <img className={style.img} src={product.img} alt={product.name} />
        </div>
        <Chuser
          chuse={product.selected}
          onClick={() => dispatch(chuseProduct(product.id))}
        />
      </div>
      <div className={style.description}>
        <h2 className={style.header}>{product.name}</h2>
        <p className={style.text}>{product.description}</p>
        <div className={style.prices}>
          <Select
            color={(ev) => getColor(ev)}
            res={(ev) => getReset(ev)}
            reset={reset}
          />
          <p className={style.cost}>
            {cost} <span>грн.</span>
          </p>
        </div>
        <div className={style["input_group"]}>
          {litrs
            ? litrs.costs.map((item) => (
                <Input
                  type="radio"
                  key={item.litrs + item.id}
                  name={litrs.id}
                  text={`${item.litrs} мл.`}
                  selected={item.select}
                  onChange={() =>
                    dispatch(
                      changeCost({ id: litrs.id, item: item.id, find: "id" })
                    )
                  }
                />
              ))
            : null}
        </div>
      </div>
      <div className={style.buy}>
        <Counter
          dec={(ev) => setPrice(ev)}
          res={(ev) => getReset(ev)}
          reset={reset}
        />
        <Button text={"Купить"} style={style.submit} onClick={submitHandler} />
      </div>
    </div>
  )
}
