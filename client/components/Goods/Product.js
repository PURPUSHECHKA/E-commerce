import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { addIdForProduct } from '../../redux/reducers/reducerOfBasket'
import AddToBasket from '../Basket/AddToBasket'

const Product = ({ particularProduct, basketCount }) => {
  const { image, title, price, id } = particularProduct
  const dispatch = useDispatch()
  const { currencyRate, currencyType } = useSelector((s) => s.reducerOfGoods)
  const addProduct = () => dispatch(addIdForProduct(id, 1))
  console.log('Product quantity', basketCount)
  return (
    <section className="max-w-240 mx-auto flex flex-col rounded-lg shadow-lg hover:shadow-2xl bg-lime-100">
      <img alt={title} className="block object-cover h-48 w-full rounded-t-lg mb-2" src={image} />
      <span className="h-16 text-center leading-2 text-black text-xl mb-1">{title}</span>
      <div className="flex flex-col">
        <span className="text-center text-xl mb-2">
          {(price * currencyRate).toFixed(2)} {currencyType}
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

Product.ropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number
}

export default memo(Product)
