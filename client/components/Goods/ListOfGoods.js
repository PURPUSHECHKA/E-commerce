import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { gettingGoods, gettingRates } from '../../redux/reducers/reducerOfGoods'
import getImage from '../reuseFunc/getImage'

import Product from './Product'
import ProductNotFound from './ProductNotFound'

const Goods = () => {
  const dispatch = useDispatch()
  const { listOfGoods, charForFilter } = useSelector((s) => s.reducerOfGoods)
  const { listOfIdsProducts } = useSelector((s) => s.reducerOfBasket)

  const style = `mx-auto max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-5xl 2xl:max-w-7xl 3xl:max-w-9xl
   grid gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 xl:gap-8 2xl:grid-cols-5 2xl:gap-10 3xl:grid-cols-6 3xl:gap-12`

  useEffect(() => {
    dispatch(gettingGoods(getImage))
    dispatch(gettingRates())
  }, [])

  const renderGoods = listOfGoods.map((particularProduct) => {
    const basketCount = listOfIdsProducts.find(({ id }) => {
      return id === particularProduct.id
    })
    if (particularProduct.title.toLowerCase().includes(charForFilter.toLowerCase())) {
      return (
        <Product
          basketCount={basketCount?.quantity}
          key={particularProduct.id}
          particularProduct={particularProduct}
        />
      )
    }
    return (
      charForFilter === '' && (
        <Product
          quantity={basketCount?.quantity}
          key={particularProduct.id}
          particularProduct={particularProduct}
        />
      )
    )
  })
  console.log(renderGoods.length)
  return (
    (renderGoods.length && <article className={style}>{renderGoods}</article>) || (
      <ProductNotFound />
    )
  )
}

Goods.propTypes = {}

export default React.memo(Goods)
