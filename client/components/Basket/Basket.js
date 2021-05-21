import React from 'react'
import { useSelector } from 'react-redux'
import NavBar from '../NavBar/NavBar'
import GetTheSumOfAllProducts from '../reuseComponents/GetTheSumOfAllProducts'

import AddToBasket from './AddToBasket'

const Basket = () => {
  const { listOfGoods, currencyType, currencyRate } = useSelector((s) => s.reducerOfGoods)
  const { listOfIdsProducts } = useSelector((s) => s.reducerOfBasket)
  const basketId = listOfIdsProducts.map(({ id }) => id)
  const goodsInBasket = listOfGoods.filter(({ id }) => basketId.includes(id))
  return (
    <div className="px-2% bg-gradient-to-b from-cyan-50 via-fuchsia-50 to-amber-50">
      <NavBar />
      <table className="m-0 p-0 w-full table-fixed rounded-lg">
        <caption className="text-2xl sm:text-3xl text-red-500 font-bold sm:font-extrabold mb-4">
          {goodsInBasket.length > 0 ? 'Basket' : 'Basket is empty'}
        </caption>
        {goodsInBasket.length > 0 && (
          <thead className="mb-5 border-b border-red-400 rounded-lg">
            <tr className="p-4 bg-red-200 hover:bg-red-300">
              {['PRICE', 'QUANTITY', 'UNTIL PRICE', 'TOTAL PRICE'].map((headerName) => {
                return (
                  <th
                    key={headerName}
                    className="tracking-wider text-center py-4 px-6 bg-grey-lightest font-bold text-2xl text-grey-dark"
                    scope="col"
                  >
                    {headerName}
                  </th>
                )
              })}
            </tr>
          </thead>
        )}

        <tbody className="mb-5 rounded-lg">
          {goodsInBasket.map((particularProduct) => {
            const { quantity } = listOfIdsProducts.find((it) => it.id === particularProduct.id)
            const totalValueOfGoods = (particularProduct.price * currencyRate).toFixed(2)
            const totalValue = (quantity * particularProduct.price * currencyRate).toFixed(2)
            return (
              <tr className="p-4 bg-red-100 border-b border-red-400" key={particularProduct.id}>
                <td className="py-4 px-6 text-right sm:text-center" data-label="PRODUCT">
                  <div className="flex flex-row-reverse items-center">
                    <img
                      className="ml-5 rounded-full h-14 w-14"
                      alt={particularProduct.title}
                      src={particularProduct.image}
                    />
                    <span className="uppercase text-sm">{particularProduct.title}</span>
                  </div>
                </td>
                <td className="py-4 px-6" data-label="QUANTITY">
                  <div className="ml-auto sm:m-auto w-24 sm:w-32">
                    <AddToBasket basketCount={quantity} particularProduct={particularProduct} />
                  </div>
                </td>
                <td className=" py-4 px-6 text-right sm:text-center" data-label="UNTIL PRICE">
                  <span className="mr-1 uppercase text-sm">{totalValueOfGoods}</span>
                  <span className="uppercase text-sm">{currencyType}</span>
                </td>
                <td className="py-4 px-6 text-right sm:text-center" data-label="TOTAL PRICE">
                  <span className="mr-1 uppercase text-sm">{totalValue}</span>
                  <span className="uppercase text-sm">{currencyType}</span>
                </td>
              </tr>
            )
          })}
        </tbody>

        {goodsInBasket.length > 0 && (
          <tfoot classame="rounded-lg">
            <tr className="bg-red-200 hover:bg-red-300 p1 sm:p-4">
              <td
                colSpan="4"
                className="p-1 sm:p-4 font-bold sm:font-extrabold text:xl sm:text-2xl text-center xs:text-start"
              >
                <span className="mr-10 xs:mr-16">TOTAL</span>
                <GetTheSumOfAllProducts />
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
