import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { gettingGoods, gettingRates } from '../../redux/reducers/reducerOfGoods'

import Product from './Product'
import ProductNotFound from './ProductNotFound'

const Goods = () => {
  const dispatch = useDispatch()
  const { listOfGoods, charForFilter } = useSelector((s) => s.reducerOfGoods)

  const getImage = (products) => {
    return products.map((product) => ({
      ...product,
      image: `https://source.unsplash.com/800x600/?${/\w+(?=\s)/gi.exec(product.title)}`
    }))
  }
  useEffect(() => {
    dispatch(gettingGoods(getImage))
    dispatch(gettingRates())
  }, [])
const renderGoods = listOfGoods.reduce((acc, allGoods) => {
        if (charForFilter === '') {
          return [...acc, <Product key={allGoods.id} allGoods={allGoods} />]
        }
        if (allGoods.title.toLowerCase().includes(charForFilter.toLowerCase())) {
          return [...acc, <Product key={allGoods.id} allGoods={allGoods} />]
        }
        return acc
      }, [])
  return (
    <article className="mt-4 mx-auto max-w-6xl grid md:grid-cols-4 md:gap-y-4 md:gap-x-8 grid-cols-2 gap-y-2 gap-x-4">
      {renderGoods.length < 1 ? <ProductNotFound /> : renderGoods}
    </article>
  )
}

Goods.propTypes = {}

export default React.memo(Goods)
