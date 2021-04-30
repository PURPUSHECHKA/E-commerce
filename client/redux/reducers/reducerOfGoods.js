import axios from 'axios'

const GET_GOODS = 'GET_GOODS'
const GET_RATES = 'GET_RATES'
const SET_CURRENCY_RATE = 'SET_CURRENCY_RATE'
const GET_SEARCH_CHARACTER_TO_FILTER = 'GET_SEARCH_CHARACTER_TO_FILTER'

const initialState = {
  listOfGoods: [],
  rates: {},
  currencyRate: 1,
  currencyType: 'USD',
  charForFilter: ''
}



export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GOODS: {
      const { listOfGoods } = action
      return {
        ...state,
        listOfGoods
      }
    }
    case GET_RATES: {
      const { rates } = action
      return {
        ...state,
        rates
      }
    }
    case SET_CURRENCY_RATE: {
      const { currencyRate, currencyType } = action
      return {
        ...state,
        currencyRate,
        currencyType
      }
    }
    case GET_SEARCH_CHARACTER_TO_FILTER: {
      const {char} = action
      return {
        ...state,
        charForFilter: char
      }
    }
    default:
      return state
  }
}

export const gettingGoods = (getImage) => {
  return async (dispatch) => {
    try {
      const { data: listOfGoods } = await axios('/api/v1/data')
      dispatch({ type: GET_GOODS, listOfGoods: getImage(listOfGoods) })
    } catch (err) {
      dispatch({ type: GET_GOODS, listOfGoods: [] })
    }
  }
}

export const gettingRates = () => {
  return async (dispatch) => {
    try {
      const { data: rates } = await axios('/api/v1/rates')
      console.log(rates)
      dispatch({ type: GET_RATES, rates })
    } catch (err) {
      dispatch({ type: GET_RATES, rates: {} })
    }
  }
}

export const setCurrencyRate = (currencyType) => {
  return  (dispatch, getState) => {
    const store = getState()
    const { rates } =  store.reducerOfGoods
    dispatch({
      type: SET_CURRENCY_RATE,
      currencyRate: rates[currencyType], currencyType
    })
  }
}

export const getCharactersToFilter = (char) => {
  return (dispatch) => {
    dispatch({ type: GET_SEARCH_CHARACTER_TO_FILTER, char })
  }
}