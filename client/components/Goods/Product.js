import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

const Product = ({ allGoods: { image, title, price } }) => {
  const { currencyRate, currencyType } = useSelector((s) => s.reducerOfGoods)
  return (
    <section className="flex flex-col rounded-md shadow-2xl bg-lime-100 pt-4">
      <img
        alt={title}
        className="block object-cover w-full rounded-t-md"
        src={image}
      />
      <span className="h-20 text-center leading-2 text-black md:text-2xl text-xl mb-3">{title}</span>
      <div className="flex flex-col pb-3">
        <span className="text-center text-xl">
          {(price * currencyRate).toFixed(2)} {currencyType}
        </span>
        <button
          id="cart button"
          type="button"
          className="text-xl flex justify-center bg-teal-500 hover:bg-teal-400 rounded-full shadow-lg focus:outline-none2"
        >
          Add to cart
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
