/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import { useSelector } from 'react-redux'
import NavBar from '../NavBar/NavBar'

import AddToBasket from './AddToBasket'

const Basket = () => {
  const { listOfGoods } = useSelector((s) => s.reducerOfGoods)
  const { listOfIdsProducts } = useSelector((s) => s.reducerOfBasket)
  const basketId = listOfIdsProducts.map(({ id }) => id)
  const goodsInBasket = listOfGoods.filter(({ id }) => basketId.includes(id))
  const { currencyRate, currencyType } = useSelector((s) => s.reducerOfGoods)

  const basketTotalPrice = listOfIdsProducts.reduce((acc, rec) => {
    const productPrice =
      (goodsInBasket.find((item) => item.id === rec.id)?.price || 0) * rec.quantity
    return acc + productPrice
  }, 0)
  return (
    <div className="px-2%">
      <NavBar />
      <table className="grid mx-auto rounded-lg px-2 rounded-t-lg  bg-indigo-600">
        <thead>
          <tr className="grid grid-cols-5 justify-items-stretch text-gray-200">
            <th className="col-start-2 p-3">PRODUCT</th>
            <th className="col-span-1 p-3">QUANTITY</th>
            <th className="col-span-1 p-3">UNIT PRICE</th>
            <th className="col-span-1 p-3">TOTAL PRICE</th>
          </tr>
        </thead>
        <tbody className="bg-indigo-200">
          {goodsInBasket.map((particularProduct) => {
            const { quantity } = listOfIdsProducts.find((it) => it.id === particularProduct.id)
            return (
              <tr
                key={particularProduct.id}
                className="grid grid-cols-5 justify-items-stretch mt-3 text-center text-gray-700"
              >
                <td className="p-3">
                  <img
                    alt={particularProduct.title}
                    className="block object-cover"
                    src={particularProduct.image}
                  />
                </td>
                <td className="p-3 place-self-center">{particularProduct.title}</td>
                <td className="p-3 w-full place-self-center">
                  <AddToBasket basketCount={quantity} particularProduct={particularProduct} />
                </td>
                <td className="text-right p-3 place-self-center">
                  <span className="mx-1">
                    {(particularProduct.price * currencyRate).toFixed(2)}
                  </span>
                  <span>{currencyType}</span>
                </td>
                <td className="text-right p-3 place-self-center">
                  <span>{(quantity * particularProduct.price * currencyRate).toFixed(2)}</span>
                  <span>{currencyType}</span>
                </td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr className="bg-indigo-400 rounded-lg flex justify-between pt-4 border-b">
            <td className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
              Total
            </td>
            <td className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
              <span className="total-amount mx-1">
                {(basketTotalPrice * currencyRate).toFixed(2)}
              </span>
              <span>{currencyType}</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
