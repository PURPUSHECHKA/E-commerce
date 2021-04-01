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
    <div className="flex flex-wrap justify-center">
      {listOfGoods.map(({ id, title, price }) => {
        return (
          <div key={id}>
            <div>{title}</div>
            <div>
              {(price * currencyRate).toFixed(2)} - {currencyType}
            </div>
          </div>
        )
      })}
    </div>
  )
}

Goods.propTypes = {}

export default React.memo(Goods)
