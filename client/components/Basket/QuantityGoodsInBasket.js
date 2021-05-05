import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartIcon = () => {
  const { listOfIdsProducts } = useSelector((s) => s.reducerOfBasket)
  const totalBasketCount = listOfIdsProducts.reduce((acc, { quantity }) => acc + quantity, 0)
  return (
    <div className="relative flex items-center h-6 w-6 lg:h-8 lg:w-8">
      <Link to="/basket">
        <img
          alt="basket"
          src="https://img.icons8.com/pastel-glyph/64/4a90e2/shopping-basket-2--v1.png"
        />
      </Link>
      <span className="absolute right-0 top-0 rounded-full bg-red-600 text-teal-100 text-xs px-1">
        {totalBasketCount}
      </span>
    </div>
  )
}
CartIcon.propTypes = {}

export default CartIcon
