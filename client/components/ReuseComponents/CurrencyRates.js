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
      <button
        className=" border border-gray-400 focus:bg-gray-900 focus:text-green-300 rounded-md px-4 py-2 m-2 transition duration-700 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
        type="button"
        onClick={() => changeCurrency('USD')}
      >
        USD
      </button>
      <button
        className="border border-gray-400 focus:bg-gray-900 focus:text-green-300 rounded-md px-4 py-2 m-2 transition duration-700 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
        type="button"
        onClick={() => changeCurrency('EUR')}
      >
        EUR
      </button>
      <button
        className="border border-gray-400 focus:bg-gray-900 focus:text-green-300 rounded-md px-4 py-2 m-2 transition duration-700 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
        type="button"
        onClick={() => changeCurrency('CAD')}
      >
        CAD
      </button>
      <button
        className="border border-gray-400 focus:bg-gray-900 focus:text-green-300 rounded-md px-4 py-2 m-2 transition duration-700 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
        type="button"
        onClick={() => changeCurrency('RUB')}
      >
        RUB
      </button>
    </div>
  )
}

CurrencyRates.propTypes = {}

export default React.memo(CurrencyRates)
