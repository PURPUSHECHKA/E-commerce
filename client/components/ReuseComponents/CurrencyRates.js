import React from 'react'
import { useDispatch } from 'react-redux'

import { setCurrencyRate } from '../../redux/reducers/reducerOfGoods'

const CurrencyRates = () => {
  const dispatch = useDispatch()
  const changeCurrency = (rate) => {
    dispatch(setCurrencyRate(rate))
  }

  return (
    <div>
      <button type="button" onClick={() => changeCurrency('USD')}>
        USD
      </button>
      <button type="button" onClick={() => changeCurrency('EUR')}>
        EUR
      </button>
      <button type="button" onClick={() => changeCurrency('CAD')}>
        CAD
      </button>
      <button type="button" onClick={() => changeCurrency('RUB')}>
        RUB
      </button>
    </div>
  )
}

CurrencyRates.propTypes = {}

export default React.memo(CurrencyRates)
