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

  const basketTotalPrice = listOfIdsProducts.reduce((acc, product) => {
    const productPrice =
      (goodsInBasket.find(({ id }) => id === product.id)?.price || 0) * product.quantity
    return acc + productPrice
  }, 0)

  return (
    <div className="px-2% bg-gradient-to-b from-cyan-50 via-fuchsia-50 to-amber-50">
      <NavBar />
      <table className="m-0 p-0 w-full table-fixed rounded-lg">
        <caption className="text-2xl sm:text-3xl text-gray-700 font-bold sm:font-extrabold mb-4">
          {goodsInBasket.length > 0 ? 'Basket' : 'Basket is empty'}
        </caption>
        <thead className="mb-5 border-b rounded-lg">
          <tr className="p-4 bg-blueGray-300">
            <th
              className="tracking-wider text-center py-4 px-6 bg-grey-lightest font-bold text-2xl text-grey-dark"
              scope="col"
            >
              PRODUCT
            </th>
            <th
              className="tracking-wider text-center py-4 px-6 bg-grey-lightest font-bold text-2xl text-grey-dark"
              scope="col"
            >
              QUANTITY
            </th>
            <th
              className="tracking-wider text-center py-4 px-6 bg-grey-lightest font-bold text-2xl text-grey-dark"
              scope="col"
            >
              UNTIL PRICE
            </th>
            <th
              className="tracking-wider text-center py-4 px-6 bg-grey-lightest font-bold text-2xl text-grey-dark"
              scope="col"
            >
              TOTAL PRICE
            </th>
          </tr>
        </thead>
        <tbody className="mb-5 rounded-lg">
          {goodsInBasket.map((particularProduct) => {
            const { quantity } = listOfIdsProducts.find((it) => it.id === particularProduct.id)
            return (
              <tr
                className="p-4 bg-blueGray-200 border-b border-blueGray-400"
                key={particularProduct.id}
              >
                <td className="py-4 px-6 text-right sm:text-center" data-label="PRODUCT">
                  <td className="flex flex-row-reverse items-center">
                    <img
                      className="ml-5 rounded-full h-14 w-14"
                      alt={particularProduct.title}
                      src={particularProduct.image}
                    />
                    <span className="uppercase text-sm">{particularProduct.title}</span>
                  </td>
                </td>
                <td className="py-4 px-6" data-label="QUANTITY">
                  <div className="ml-auto sm:m-auto w-24 sm:w-32">
                    <AddToBasket basketCount={quantity} particularProduct={particularProduct} />
                  </div>
                </td>
                <td className=" py-4 px-6 text-right sm:text-center" data-label="UNTIL PRICE">
                  <span className="mx-1 uppercase text-sm">
                    {(particularProduct.price * currencyRate).toFixed(2)}
                  </span>
                  <span className="uppercase text-sm">{currencyType}</span>
                </td>
                <td className="py-4 px-6 text-right sm:text-center" data-label="TOTAL PRICE">
                  <span className="uppercase text-sm">
                    {(quantity * particularProduct.price * currencyRate).toFixed(2)}
                  </span>
                  <span className="uppercase text-sm">{currencyType}</span>
                </td>
              </tr>
            )
          })}
        </tbody>
        {basketTotalPrice > 1 && (
          <tfoot classame="rounded-lg">
            <tr className="bg-blueGray-300 p1 sm:p-4">
              <td
                colSpan="4"
                className=" p-1 sm:p-4 font-bold sm:font-extrabold text:xl sm:text-2xl text-center"
              >
                {' '}
                <span>TOTAL</span>
                <span className="mx-1">{(basketTotalPrice * currencyRate).toFixed(2)}</span>
                <span>{currencyType}</span>
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  )
}
Basket.propTypes = {}

export default React.memo(Basket)

/*
     <tfoot classame="rounded-lg">
          <tr className="flex items-end bg-blueGray-300  p-4">
            <td className="font-bold text-center">Total</td>
            <td className="font-bold text-center">
              <span className="total-amount mx-1">
                {(basketTotalPrice * currencyRate).toFixed(2)}
              </span>
              <span>{currencyType}</span>
            </td>
          </tr>
        </tfoot>
*/
