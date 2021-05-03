import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { gettingGoods, gettingRates } from '../../redux/reducers/reducerOfGoods'
import getImage from '../reuseFunc/getImage'

import Product from './Product'
import ProductNotFound from './ProductNotFound'

const Goods = () => {
  const dispatch = useDispatch()
  const { listOfGoods, charForFilter } = useSelector((s) => s.reducerOfGoods)

  const style = `mx-auto max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-5xl 2xl:max-w-7xl 3xl:max-w-9xl
   grid gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 xl:gap-8 2xl:grid-cols-5 2xl:gap-10 3xl:grid-cols-6 3xl:gap-12`

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
  return renderGoods.length < 1 ? (
    <ProductNotFound />
  ) : (
    <article className={style}>{renderGoods}</article>
  )
}

Goods.propTypes = {}

export default React.memo(Goods)
