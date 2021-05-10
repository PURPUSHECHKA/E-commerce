import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addIdForProduct } from '../../redux/reducers/reducerOfBasket'
import { ADD_ONE_PRODUCT, DELETE_ONE_PRODUCT } from '../constantes/constantes'

const AddToBasket = ({ particularProduct, basketCount }) => {
  const dispatch = useDispatch()
  const changeProductQuantity = useCallback((id, value) => dispatch(addIdForProduct(id, value)), [
    dispatch
  ])

  return (
    <div className="flex flex-row bg-gradient-to-r from-blue-500 rounded-full to-red-500 text-xl">
      <button
        type="button"
        onClick={() => changeProductQuantity(particularProduct.id, ADD_ONE_PRODUCT)}
        className="w-full focus:outline-none"
      >
        +
      </button>
      <div className="flex text-lg">
        <span className="bg-teal-300 focus:outline-none rounded-full px-2"> {basketCount}</span>
      </div>
      <button
        type="button"
        onClick={() => changeProductQuantity(particularProduct.id, DELETE_ONE_PRODUCT)}
        className="w-full focus:outline-none"
      >
        -
      </button>
    </div>
  )
}

AddToBasket.propTypes = {}

export default AddToBasket
