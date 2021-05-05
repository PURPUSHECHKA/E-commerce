import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import reducerOfGoods from './reducerOfGoods'
import reducerOfBasket from './reducerOfBasket'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    reducerOfGoods,
    reducerOfBasket
  })

export default createRootReducer
