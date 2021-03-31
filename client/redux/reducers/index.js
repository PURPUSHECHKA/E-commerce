import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import reducerOfGoods from './reducerOfGoods'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    reducerOfGoods
  })

export default createRootReducer
