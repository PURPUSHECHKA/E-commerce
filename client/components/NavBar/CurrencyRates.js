import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCurrencyRate } from '../../redux/reducers/reducerOfGoods'

const CurrencyRates = () => {
  const dispatch = useDispatch()
  const { currencyType } = useSelector((s) => s.reducerOfGoods)
  const changeCurrency = (rate) => {
    dispatch(setCurrencyRate(rate))
  }

  const notActive =
    'rounded-md m-1 px-3 py-2 bg-blue-200 transition duration-700 hover:bg-blue-300 focus:outline-none'
  const active =
    'rounded-md m-1 px-3 py-2 bg-violet-600 hover:bg-violet-800 text-green-200 transition duration-700 focus:outline-none'

  return (
    <div>
      {['USD', 'EUR', 'CAD', 'RUB'].map((currency) => (
        <button
          key={currency}
          className={currencyType === currency ? active : notActive}
          type="button"
          onClick={() => changeCurrency(currency)}
        >
          {currency}
        </button>
      ))}
    </div>
  )
}

CurrencyRates.propTypes = {}

export default React.memo(CurrencyRates)
