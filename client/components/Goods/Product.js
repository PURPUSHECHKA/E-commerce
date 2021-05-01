import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

const Product = ({ allGoods: { image, title, price } }) => {
  const { currencyRate, currencyType } = useSelector((s) => s.reducerOfGoods)
  return (
    <section className="flex flex-col rounded-md shadow-2xl bg-lime-100">
      <img
        alt={title}
        className="block object-cover w-full rounded-t-md mb-2"
        src={image}
      />
      <span className="h-16 text-center leading-2 text-black md:text-2xl text-xl mb-1">{title}</span>
      <div className="flex flex-col">
        <span className="text-center text-xl mb-2">
          {(price * currencyRate).toFixed(2)} {currencyType}
        </span>
        <button
          id="cart button"
          type="button"
          className="text-xl flex justify-center bg-teal-500 hover:bg-teal-400 rounded-full shadow-lg focus:outline-none"
        >      Add to cart
        </button>
      </div>
    </section>
  )
}

Product.ropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default memo(Product)
