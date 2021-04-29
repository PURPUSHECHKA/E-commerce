import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { gettingGoods, gettingRates } from '../../redux/reducers/reducerOfGoods'

const Goods = () => {
  const dispatch = useDispatch()

  const { listOfGoods } = useSelector((s) => s.reducerOfGoods)
  const { currencyRate, currencyType } = useSelector((s) => s.reducerOfGoods)

  useEffect(() => dispatch(gettingGoods()), [])
  useEffect(() => dispatch(gettingRates()), [])

  return (
    <div className="mt-4 grid md:grid-cols-5 gap-y-4 gap-x-10 max-w-6xl m-auto">
      {listOfGoods.map(({ id, title, price }) => {
        return (
          <div className="bg-red-400 shadow-lg" key={id}>
            <div>{title}</div>
            <span className="text-center">{(price * currencyRate).toFixed(2)}</span>
            <span className="text-center"> {currencyType}</span>
          </div>
        )
      })}
    </div>
  )
}

Goods.propTypes = {}

export default React.memo(Goods)
