import React, { memo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { addIdForProduct } from '../../redux/reducers/reducerOfBasket'
import AddToBasket from '../Basket/AddToBasket'
import { ADD_ONE_PRODUCT } from '../constantes/constantes'

const Product = ({ particularProduct, basketCount }) => {
  const dispatch = useDispatch()
  const { currencyRate, currencyType } = useSelector((s) => s.reducerOfGoods)
  const { image, title, price, id } = particularProduct
  const costOfgoods = (price * currencyRate).toFixed(2)

  const addProduct = useCallback(() => dispatch(addIdForProduct(id, ADD_ONE_PRODUCT)), [
    id,
    dispatch
  ])
  return (
    <section className="max-w-240 mx-auto flex flex-col rounded-lg shadow-lg hover:shadow-2xl bg-lime-100">
      <img alt={title} loading="lazy" className="block object-cover h-48 w-full rounded-t-lg mb-2" src={image} />
      <span className="h-16 text-center leading-2 text-black text-xl mb-1">{title}</span>
      <div className="flex flex-col">
        <span className="text-center text-xl mb-2">
          {costOfgoods} {currencyType}
        </span>
        {!basketCount && (
          <button
            onClick={addProduct}
            id="cart button"
            type="button"
            className="text-xl flex justify-center bg-teal-500 hover:bg-teal-400 rounded-full shadow-lg focus:outline-none"
          >
            Add to cart
          </button>
        )}
        {basketCount > 0 && (
          <AddToBasket basketCount={basketCount} particularProduct={particularProduct} />
        )}
      </div>
    </section>
  )
}

Product.propTypes = {
  particularProduct: PropTypes.PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string
  }).isRequired,
  basketCount: PropTypes.number
}

Product.defaultProps = {
  basketCount: null
}

export default memo(Product)
