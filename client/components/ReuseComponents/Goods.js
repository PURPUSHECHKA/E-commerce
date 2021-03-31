import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { gettingGoods, gettingRates } from '../../redux/reducers/reducerOfGoods'

const Goods = () => {
  const dispatch = useDispatch()
  const { listOfGoods } = useSelector((s) => s.reducerOfGoods)
  const  { currentRate } = useSelector((s) => s.reducerOfGoods)
  useEffect(() => dispatch(gettingGoods()), [])
  useEffect(() => dispatch(gettingRates()), [])

  return (
    <div>
      {listOfGoods.map(({ id, title, price }) => {
        return (
          <div key={id}>
            <div>{title}</div>
            <div>{(price * currentRate).toFixed(2)}</div>
          </div>
        )
      })}
    </div>
  )
}

Goods.propTypes = {}

export default React.memo(Goods)
